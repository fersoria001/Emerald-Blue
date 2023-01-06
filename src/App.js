import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Ofertas from './pages/Ofertas.jsx';
import Home from './pages/Home.jsx';
import Categorias from './pages/Categorias.jsx'
import './App.css'
import BarraDeNavegacion from './barra_de_navegacion/BarraDeNavegacion.jsx';
import Carrito from './pages/Carrito.jsx';
import CrearCuenta from './pages/CrearCuenta.jsx';
import MisCompras from './pages/MisCompras.jsx';
import Historial from './pages/Historial.jsx';
import Ingresar from './pages/Ingresar.jsx';
import Vender from './pages/Vender.jsx';
import Ayuda from './pages/Ayuda.jsx';


class App extends Component {
render() {
	return (
	<Router>
    <BarraDeNavegacion />
		<Routes>
				<Route  path='/home' element={<Home />}></Route>
				<Route  path='/categorias' element={<Categorias />}></Route>
				<Route  path='/ofertas' element={<Ofertas />}></Route>
				<Route  path='/carrito' element={<Carrito />}></Route>
				<Route  path='/crear_cuenta' element={<CrearCuenta />}></Route>
				<Route  path='/historial' element={<Historial />}></Route>
				<Route  path='/ingresar' element={<Ingresar />}></Route>
				<Route  path='/mis_compras' element={<MisCompras />}></Route>
				<Route  path='/vender' element={<Vender />}></Route>
				<Route  path='/help' element={<Ayuda />}></Route>

		</Routes>

	</Router>
);
}
}

export default App;
