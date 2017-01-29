require('./Tile.scss');
import React, { Component } from 'react';

export default class Tile extends Component {

	constructor(props) {
		super(props);
	}

	handleClick(e) {
		this.props.changeScreen('event');
		this.props.setCurrentEvent(this.props.event);
	}

	render() {
		const style = {
			background: `url(${this.props.event.photo})`,
		    backgroundPosition: 'center',
		    backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		};

		return(
			<div 
				className='tile'
				style={style}
				onClick={this.handleClick.bind(this)}
			>
				<p className='tile__text'>{this.props.event.name}</p>
				<p className='tile__text'>{this.props.event.date}</p>
			</div>
		);
	}

}