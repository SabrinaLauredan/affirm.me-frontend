import * as React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import { GoalList } from './Components/GoalList';

function App() {
	return (
	<Router>
		<nav> 
			<Link to="/"> Home </Link>
			<Link to="/about"> About </Link>
		</nav>
		<Routes>
			<Route path="/" element={<Home />} /> 
			<Route path="/about" element={<About />} />
			<Route path="/*" element={<ErrorPage />} />
		</Routes>
		< GoalList />
		<div> footer </div> 
	</Router>
	);

}
export default App; 