// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import './global.css';

import Badge from './components/Badge';


const container = document.getElementById('app');

/// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
	<Badge 
		firstName="Daniel" 
		lastName="Bermudez" 
		avatar = "//gravatar.com/avatar/2007403d1fff04f37d16509ff0eaabd1?s=200"
		jobTitle="Frontend Engineer" 
		twitter="@DanielBermudez" 
	/>, 
	container
);
