require('./Ezee.scss');
import React, { Component } from 'react';
import ChromeSearch from './Android/ChromeSearch/ChromeSearch';
import Login from './Login/Login';
import CreateAccount from './CreateAccount/CreateAccount';
import Home from './Home/Home';
import Desktop from './Android/Desktop/Desktop';
import Event from './Event/Event';

// let isPushEnabled = false;
// let useNotifications = false;

export default class Eeze extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentScreen: 'chrome-search',
			event: ''
		}
	}

	// componentDidMount() {
	// 	Notification.requestPermission();

	// 	if('serviceWorker' in navigator) {
	// 		navigator.serviceWorker.register('sw.js')
	// 			.then((reg) => {
	// 				if(reg.installing) {
	// 					console.log('Service worker installing');
	// 				} else if(reg.waiting) {
	// 					console.log('Service worker installed');
	// 				} else if(reg.active) {
	// 					console.log('Service worker active');
	// 				}

	// 				// Are Notifications supported in the service worker?  
	// 				if (!('showNotification' in ServiceWorkerRegistration.prototype)) {  
	// 					console.warn('Notifications aren\'t supported.');  
	// 					return;  
	// 				}

	// 				// Check the current Notification permission.  
	// 				// If its denied, it's a permanent block until the  
	// 				// user changes the permission  
	// 				if (Notification.permission === 'denied') {  
	// 					console.warn('The user has blocked notifications.');  
	// 					return;  
	// 				}

	// 				// Check if push messaging is supported  
	// 				if (!('PushManager' in window)) {  
	// 					console.warn('Push messaging isn\'t supported.');  
	// 					return;  
	// 				}

	// 				// We need the service worker registration to check for a subscription  
	// 				 navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {  
	// 				    // Do we already have a push message subscription?  
	// 				    serviceWorkerRegistration.pushManager.getSubscription()  
	// 					    .then((subscription) => {  
	// 					        // Enable any UI which subscribes / unsubscribes from  
	// 					        // push messages.  
	// 					        // let pushButton = document.querySelector('.js-push-button');  
	// 					        // pushButton.disabled = false;

	// 					        if (!subscription) {  
	// 					          	// We aren't subscribed to push, so set UI  
	// 					          	// to allow the user to enable push  
	// 					          	return;  
	// 					        }

	// 					        console.log(subscription);

	// 					        // Keep your server in sync with the latest subscriptionId
	// 					        // sendSubscriptionToServer(subscription);

	// 					        // Set your UI to show they have subscribed for  
	// 					        // push messages  
	// 					        // pushButton.textContent = 'Disable Push Messages';  
	// 					        isPushEnabled = true;  
	// 					    })  
	// 					    .catch((err) => {  
	// 					        console.warn('Error during getSubscription()', err);  
	// 					    });  
	// 				});  
	// 			});
	// 	} else {
	// 		console.warn('Service workers are not supported in this browser!')
	// 	}
	// }

	// handleClick(e) {
	// 	// Let's check if the browser supports notifications
	// 	if (!('Notification' in window)) {
	// 	    alert('This browser does not support system notifications');
	// 	}

	// 	// Let's check whether notification permissions have already been granted
	// 	else if (Notification.permission === 'granted') {
	// 	    // If it's okay let's create a notification
	// 	    let notification = new Notification('Hi there!');
	// 	}

	// 	  // Otherwise, we need to ask the user for permission
	// 	else if (Notification.permission !== 'denied') {
	// 	    Notification.requestPermission((permission) => {
	// 	      // If the user accepts, let's create a notification
	// 	      	if (permission === 'granted') {
	// 	        	let notification = new Notification('Hi there!', {
	// 	        		body: 'test'
	// 	        	});
	// 	      	}
	// 	    });
	// 	}
	// }
	
	changeScreen(screen) {
		this.setState({
			currentScreen: screen
		});
	}

	setCurrentEvent(event) {
		this.setState({
			currentEvent: event
		});
	}

	render() {

		const currentScreen = this.state.currentScreen;

		if(currentScreen === 'chrome-search') {
			return(
				<div>
					<ChromeSearch changeScreen={this.changeScreen.bind(this)} />
				</div>
			);
		} else if(currentScreen === 'login') {
			return(
				<div>
					<Login changeScreen={this.changeScreen.bind(this)} />
				</div>
			);
		} else if(currentScreen === 'create-account') {
			return(
				<div>
					<CreateAccount changeScreen={this.changeScreen.bind(this)} />
				</div>
			);
		} else if(currentScreen === 'home') {
			return(
				<div>
					<Home
						changeScreen={this.changeScreen.bind(this)}
						setCurrentEvent={this.setCurrentEvent.bind(this)}
					/>
				</div>
			);
		} else if(currentScreen === 'event') {
			return(
				<div>
					<Event
						event={this.state.currentEvent}
						changeScreen={this.changeScreen.bind(this)}
					/>
				</div>
			);	
		} else if(currentScreen === 'desktop') {
			return(
				<div>
					<Desktop
						changeScreen={this.changeScreen.bind(this)}
						setCurrentEvent={this.setCurrentEvent.bind(this)}
					/>
				</div>
			);
		}
	}

}