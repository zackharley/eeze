require('./Event.scss');
import React, { Component } from 'react';
import GradientBackground from './../GradientBackground/GradientBackground';

export default class Event extends Component {

	constructor(props) {
		super(props);
		this.state = {
			heart: false
		}
	}

	handleBackClick(e) {
		this.props.changeScreen('home');
	}

	handleSearchClick(e) {

	}

	handleHeartClick(e) {
		this.setState({
			heart: !this.state.heart
		})
	}

	handleBuyClick(e) {

	}

	handleHelpClick(e) {

	}

	render() {
		const style = {
			background: `url(${this.props.event.photo})`,
		    backgroundPosition: 'center',
		    backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		};

		return(
			<GradientBackground>
				<div className='event-screen'>
					<header className='event-screen__header'>
						<i
							onClick={this.handleBackClick.bind(this)}
							className='fa fa-chevron-left event-screen__header__icon'
						/>
						<img src='/assets/images/logo.png' className='event-screen__header__logo' />
						<i
							onClick={this.handleSearchClick.bind(this)}
							className='fa fa-search event-screen__header__icon'
						/>
					</header>
					<div className='event-screen__img' style={style}>
						<i
							onClick={this.handleHeartClick.bind(this)}
							className={`fa fa-heart${this.state.heart ? '' : '-o'} event-screen__heart`}
						/>	
						<div className='event-screen__img__info'>
							<i className='fa fa-clock-o event-screen__clock'/>
							<p className='event-screen__img__text'>{`${this.props.event.date} @ ${this.props.event.time}`}</p>
							<p className='event-screen__img__text'>{this.props.event.genre}</p>			
						</div>
					</div>
					<div className='event-screen__details'>
						<h1 className='event-screen__details__title'>{this.props.event.name}</h1>
						<div className='event-screen__details__bottom'>
							<div className='event-screen__details__bottom-wrapper'>
								<i className='fa fa-map-marker event-screen__details__bottom-icon'/>
								<p className='event-screen__details__bottom-text'>{this.props.event.location}</p>
							</div>
							<div className='event-screen__details__bottom-wrapper'>
								<i className='fa fa-ticket event-screen__details__bottom-icon'/>
								<p className='event-screen__details__bottom-text'>{this.props.event.seat}</p>
								<p className='event-screen__details__bottom-text event-screen__details__bottom-text--right'>{this.props.event.price}</p>
							</div>
						</div>
					</div>
					<div className='event-screen-screen__buy'>
						<button
							className='event-screen-screen__buy-btn'
							onClick={this.handleBuyClick.bind(this)}
						>Buy Now!</button>
					</div>
					<footer className='event-screen-screen__footer'>
						<a
							className='event-screen-screen__footer__link'
							href='#terms-and-conditions'
							onClick={this.handleHelpClick.bind(this)}
						>Need Help?</a>
					</footer>
				</div>
			</GradientBackground>
		);
	}

}