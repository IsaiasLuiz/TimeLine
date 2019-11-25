import React, { Component } from 'react';
import mock from '../mocks/Status';
import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeLine.css';

const CANCELED = 'Cancelado';

export default class Timeline extends Component {
	returnColor = status => (status === CANCELED ? '#eb6363' : '#035ec7');

	render() {
		return (
			<>
				<h1 className='header-text'>Histórico de Tarefas concluídas</h1>
				<h3 className='order-data'>
					<strong>Id do Projeto:</strong> <label>{mock.id}</label>
				</h3>
				<h3 className='order-data'>
					<strong>Usuario:</strong> <label>{mock.user}</label>
				</h3>
				<VerticalTimeline className='timeline-body'>
					{mock.status.map(current => (
						<VerticalTimelineElement
							key={current.status}
							contentStyle={{
								background: '#f6f6f6',
								border: `1px solid  ${this.returnColor(current.status)}`,
								color: '#4f4f4f',
								minHeight: '100px',
								padding: '2px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
								boxShadow: 'none'
							}}
							contentArrowStyle={{
								borderRight: `10px solid  ${this.returnColor(current.status)}`
							}}
							iconStyle={{ background: this.returnColor(current.status) }}
						>
							<h3
								className='status'
								style={{ color: this.returnColor(current.status) }}
							>
								{current.status}
							</h3>
							<h2 className='date'>{current.date}</h2>
							<p className='description'>{current.description}</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</>
		);
	}
}
