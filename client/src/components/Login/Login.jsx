require('./Login.scss');
import React, { Component } from 'react';

export default class Login extends Component {

	handleCreateAccount(e) {
		this.props.changeScreen('create-account');
	}

	handleLoginClick(e) {
		this.props.changeScreen('home');
	}

	render() {
		return(
			<div className='login-screen'>
				<div className='login-screen__background--overlay'>
					<div className='login-screen__top'>
						<img src='/assets/images/logo.png'/>
					</div>
					<div className='login-screen__bottom'>
						<div className='login-screen__form'>
							<div className='login-screen__form-item'>
								<i className='fa fa-envelope-o login-screen__form-item__icon' />
								<input
									type='text'
									className='login-screen__form-item__input'
									placeholder='Email'
								/>
							</div>
							<div className='login-screen__form-item'>
								<i className='fa fa-key login-screen__form-item__icon' />
								<input 
									type='password'
									className='login-screen__form-item__input'
									placeholder='Password'
								/>
							</div>
							<button
								className='login-screen__login-btn'
								onClick={this.handleLoginClick.bind(this)}
							>Login</button>
						</div>
						<footer className='login-screen__footer'>
							<a 
								className='login-screen__footer__link'
								href='#create-account'
								onClick={this.handleCreateAccount.bind(this)}
							>Create Account</a>
							<a className='login-screen__footer__link' href='#help'>Need Help?</a>
						</footer>
					</div>
				</div>
			</div>
		);
	}

}