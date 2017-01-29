require('./ChromeSearch.scss');
import React, { Component } from 'react';

export default class ChromeSearch extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isEmpty: true
		};
	}

	handleKeyPress(e) {
		const enter = 13;

		if(e.charCode === enter) {
			document.getElementById('prog').style.width = '100vw';
			setTimeout(() => {
				this.props.changeScreen('login');
			}, 1000);
		}
	}

	onChange(e) {
		if(e.target.value !== '') {
			this.setState({
				isEmpty: false
			});
		} else {
			this.setState({
				isEmpty: true
			})
		}
	}

	render() {
		return(
			<div className='chrome-search-screen'>
				<header className='chrome-search-screen__header'>
					<input 
						className='chrome-search-screen__search'
						placeholder='Search or type URL' type='text'
						onKeyPress={this.handleKeyPress.bind(this)}
						onChange={this.onChange.bind(this)}
					/>
					<i className={`fa fa-${this.state.isEmpty ? 'microphone' : 'times-circle-o'} chrome-search-screen__microphone`}/>
				</header>
				<div id='prog' className='chrome-search-screen__progress-bar'/>
				<div className='chrome-search-screen--overlay'/>
			</div>
		);
	}

}