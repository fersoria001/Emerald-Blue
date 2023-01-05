import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Ofertas from './pages/Ofertas.jsx';
import Home from './pages/Home.jsx';
import Categorias from './pages/Categorias.jsx'
import './App.css'


class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
			<ul className="App-header">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/help">Help</Link>
			</li>
			<li>
				<Link to="/ofertas">For Sale</Link>
			</li>
			</ul>
		<Routes>
				<Route  path='/' element={<Home />}></Route>
				<Route  path='/help' element={<Categorias />}></Route>
				<Route  path='/ofertas' element={<Ofertas />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
