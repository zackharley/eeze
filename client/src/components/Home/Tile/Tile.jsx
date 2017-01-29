require('./Tile.scss');
import React, { Component } from 'react';

export default class Tile extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const style = {
			background: `url(${this.props.event.photo})`,
		    backgroundPosition: 'center',
		    backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		};

		return(
			<div className='tile' style={style}>
				<p>{this.props.event.name}</p>
				<p>{this.props.event.date}</p>
			</div>
		);
	}

}