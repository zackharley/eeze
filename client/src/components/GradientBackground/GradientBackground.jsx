require('./GradientBackground.scss');
import React, { Component } from 'react';

export default class GradientBackground extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='gradient-background'>
				{this.props.children}
			</div>
		);
	}

}