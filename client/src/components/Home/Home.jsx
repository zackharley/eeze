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
					photo: `${imagePath}/arctic_monkeys.jpg`
				},
				{
					name: 'OK GO',
					date: 'April 3, 2017',
					photo: `${imagePath}/ok_go.jpg`
				},
				{
					name: 'Toronto Blue Jays',
					date: 'April 10, 2017',
					photo: `${imagePath}/toronto_blue_jays.jpg`
				},
				{
					name: 'Hey Ocean!',
					date: 'April 30, 2017',
					photo: `${imagePath}/hey_ocean.jpg`
				},
				{
					name: 'Hannah Georgas',
					date: 'May 4, 2017',
					photo: `${imagePath}/hannah-georgas.jpg`
				},
				{
					name: 'The Zolas',
					date: 'May 12, 2017',
					photo: `${imagePath}/the_zolas.jpg`
				}
			]
		};
	}

	render() {

		return(
			<GradientBackground>
				<div className='home-screen'>
					<header className='home-screen__header'>

					</header>
					<nav className='home-screen__nav'>
						<ul className='home-screen__nav-list'>
							<li className='home-screen__nav-list__item'>
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
							return <Tile key={`${event.name}${event.date}${event.photo}`} event={event} />
						})}
					</div>
				</div>
			</GradientBackground>
		);
	}

}