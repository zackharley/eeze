require('./Desktop.scss');
import React, { Component } from 'react';

export default class Desktop extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNotificationVisible: false
		};
	}

	handleDesktopClick(e) {
		this.setState({
			isNotificationVisible: true
		});
	}

	handleNotificationClick(e) {
		this.props.changeScreen('event');
		this.props.setCurrentEvent({
			name: 'Arctic Monkeys',
			date: 'February 21, 2017',
			time: '8:00 pm',
			location: 'Air Canada Center',
			seat: 'Section 134B, Row 10-22',
			price: '$84 / ticket',
			photo: `/assets/images/arctic_monkeys.jpg`,
			genre: 'Music'
		});
	}

	render() {
		return(
			<div className='desktop-screen' onClick={this.handleDesktopClick.bind(this)}>
				{
					this.state.isNotificationVisible ?
					<div
						className='desktop-screen__notification'
						onClick={this.handleNotificationClick.bind(this)}
					>
						<span className='fa-stack fa-lg desktop-screen__ticket-wrapper'>
						  	<i className='fa fa-circle fa-stack-2x desktop-screen__ticket-bg'/>
						  	<i className='fa fa-ticket fa-stack-1x fa-inverse desktop-screen__ticket-icon'/>
						</span>
						<div className='desktop-screen__call-to-action'>
							<div className='desktop-screen__call-to-action__top'>
								<h1 className='desktop-screen__call-to-action__title'>Arctic Monkeys</h1>
								<p className='desktop-screen__call-to-action__time'>6:21 PM</p>
							</div>
							<h2 className='desktop-screen__call-to-action__prompt'>Get your tickets!</h2>
						</div>
					</div> : ''
				}
				{
					this.state.isNotificationVisible ?
					<div className='desktop-screen--overlay' /> : ''
				}
				}
			</div>
		);
	}

}