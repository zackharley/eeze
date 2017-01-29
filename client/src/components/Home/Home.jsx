require('./Home.scss');
import React, { Component } from 'react';
import GradientBackground from './../GradientBackground/GradientBackground';
import Tile from './Tile/Tile';

export default class Home extends Component {

	constructor(props) {
		super(props);
		const imagePath = '/assets/images'
		this.state = {
			events: [
				{
					name: 'Arctic Monkeys',
					date: 'February 21, 2017',
					time: '8:00 pm',
					location: 'Air Canada Center',
					seat: 'Section 134B, Row 10-22',
					price: '$84 / ticket',
					photo: `${imagePath}/arctic_monkeys.jpg`,
					genre: 'Music'
				},
				{
					name: 'OK GO',
					date: 'April 3, 2017',
					time: '8:00 pm',
					location: 'Air Canada Center',
					seat: 'Section 134B, Row 10-22',
					price: '$84 / ticket',
					photo: `${imagePath}/ok_go.jpg`,
					genre: 'Music'
				},
				{
					name: 'Toronto Blue Jays',
					date: 'April 10, 2017',
					time: '8:00 pm',
					location: 'Air Canada Center',
					seat: 'Section 134B, Row 10-22',
					price: '$84 / ticket',
					photo: `${imagePath}/toronto_blue_jays.jpg`,
					genre: 'Sports'
				},
				{
					name: 'Hey Ocean!',
					date: 'April 30, 2017',
					time: '8:00 pm',
					location: 'Air Canada Center',
					seat: 'Section 134B, Row 10-22',
					price: '$84 / ticket',
					photo: `${imagePath}/hey_ocean.jpg`,
					genre: 'Music'
				},
				{
					name: 'Hannah Georgas',
					date: 'May 4, 2017',
					time: '8:00 pm',
					location: 'Air Canada Center',
					seat: 'Section 134B, Row 10-22',
					price: '$84 / ticket',
					photo: `${imagePath}/hannah-georgas.jpg`,
					genre: 'Music'
				},
				{
					name: 'The Zolas',
					date: 'May 12, 2017',
					time: '8:00 pm',
					location: 'Air Canada Center',
					seat: 'Section 134B, Row 10-22',
					price: '$84 / ticket',
					photo: `${imagePath}/the_zolas.jpg`,
					genre: 'Music'
				}
			]
		};
	}

	handleHamburgerClick(e) {

	}

	handleSearchClick(e) {
		this.props.changeScreen('desktop');
	}

	render() {

		return(
			<GradientBackground>
				<div className='home-screen'>
					<header className='home-screen__header'>
						<i
							onClick={this.handleHamburgerClick.bind(this)}
							className='fa fa-bars home-screen__header__icon'
						/>
						<img src='/assets/images/logo.png' className='home-screen__header__logo' />
						<i
							onClick={this.handleSearchClick.bind(this)}
							className='fa fa-search home-screen__header__icon'
						/>
					</header>
					<nav className='home-screen__nav'>
						<ul className='home-screen__nav-list'>
							<li className='home-screen__nav-list__item home-screen__nav-list__item--selected'>
								<a className='home-screen__nav-list__link'>Following</a>
							</li>
							<li className='home-screen__nav-list__item'>
								<a className='home-screen__nav-list__link'>Popular</a>
							</li>
							<li className='home-screen__nav-list__item'>
								<a className='home-screen__nav-list__link'>Nearby</a>
							</li>
						</ul>
					</nav>
					<div className='home-screen__tiles'>
						{this.state.events.map((event) => {
							return (
								<Tile 
									changeScreen={this.props.changeScreen}
									setCurrentEvent={this.props.setCurrentEvent}
									key={`${event.name}${event.date}${event.photo}`} 
									event={event}
								/>
							);
						})}
					</div>
				</div>
			</GradientBackground>
		);
	}

}