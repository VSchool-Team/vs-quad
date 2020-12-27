import React from 'react';
import './App.css';

import Header from './components/Header';

function App() {
	return (
		<div className='container '>
			<div className='content'>
				<Header title='VQ' appDescription='Learn | Share | Connect' />
				<h2>Let's Get Coding</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis
					autem doloremque! Voluptate eligendi commodi eum totam cupiditate
					placeat, vitae fuga, excepturi rem maxime expedita nihil optio
					temporibus cum quam.
				</p>
			</div>
			<footer>Date: </footer>
		</div>
	);
}

export default App;
