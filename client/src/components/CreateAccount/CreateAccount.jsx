require('./CreateAccount.scss');
import React, { Component } from 'react';
import GradientBackground from './../GradientBackground/GradientBackground';

export default class CreateAccount extends Component {

	handleCreateAccountClick(e) {
		this.props.changeScreen('home');
	}

	handleTermsAndConditionsClick(e) {
		
	}

	render() {
		return(
			<GradientBackground>
				<div className='create-account-screen'>
					<header className='create-account-screen__header'>
						<h1 className='create-account-screen__header__title'>CREATE ACCOUNT</h1>
					</header>
					<div className='create-account-screen__form'>
						<div className='create-account-screen__form-item'>
							<i className='fa fa-user-circle-o create-account-screen__form-item__icon' />
							<input
								type='text'
								className='create-account-screen__form-item__input'
								placeholder='Name'
							/>
						</div>
						<div className='create-account-screen__form-item'>
							<i className='fa fa-envelope-o create-account-screen__form-item__icon' />
							<input
								type='text'
								className='create-account-screen__form-item__input'
								placeholder='Email'
							/>
						</div>
						<div className='create-account-screen__form-item'>
							<i className='fa fa-key create-account-screen__form-item__icon' />
							<input
								type='password'
								className='create-account-screen__form-item__input'
								placeholder='Password'
							/>
						</div>
					</div>
					<div className='create-account-screen__submit'>
						<button
							className='create-account-screen__submit-btn'
							onClick={this.handleCreateAccountClick.bind(this)}
						>Create Account</button>
					</div>
					<footer className='create-account-screen__footer'>
						<a
							className='create-account-screen__footer__link'
							href='#terms-and-conditions'
							onClick={this.handleTermsAndConditionsClick.bind(this)}
						>Terms &amp; Conditions</a>
					</footer>
				</div>
			</GradientBackground>
		);
	}

}