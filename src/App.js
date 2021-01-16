import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import {Home, Login} from './pages'
import Header from './components/Header';
import CompletionCalculator from './components/CompletionCalculator';

function App() {
	return (
		
		<Switch>
			{/* <Route to="/login">
				<Login/>
			</Route> */}
			<Route to="/calc/">
				<CompletionCalculator/>
			</Route>
			{/* <Route to="/">
				<Home/>
			</Route> */}
		</Switch>
			
	);
}

export default App;
