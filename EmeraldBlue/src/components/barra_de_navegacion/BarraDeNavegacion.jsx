import React from 'react'
import { Link } from 'react-router-dom';
import './barra_de_navegacion.css';
import emerald from "./emerald.png";
import useUser from '../../hooks/useUser';

export default function BarraDeNavegacion() {
  //const isLogged = false;
  const {isLogged, logout} = useUser()
  const handleClick = e =>{
    e.preventDefault()
    logout()
  }

  return (
    <nav className="navbar">
      <div className='container-fluid'>
        <Link to="/" className="navbar-brand ms-5">
          <img src={emerald} width="40" height="40" alt="" />
        </Link>
        <form className='form-inline p-3 mx-auto'>
          <input className='form-control-inline' type="search" placeholder="Search" />
          <button className="btn btn-outline-success ms-2" type="submit">Search</button>
        </form>
        <span className='text me-5'> ANUNCIO PROPIO </span>
      </div>
      <div className='container py-2'>
        <Link to="/categorias" className="btn btn-outline-primary btn-sm">Categories</Link>
        <Link to="/ofertas" className="btn btn-outline-primary btn-sm">For Sale</Link>
        <Link to="/historial" className="btn btn-outline-primary btn-sm">History</Link>
        <Link to="/mis_compras" className="btn btn-outline-primary btn-sm">My Buys</Link>
        <Link to="/vender" className="btn btn-outline-primary btn-sm">Sell</Link>
        <Link to="/crear_cuenta" className="btn btn-outline-primary btn-sm">Create Account</Link>
        <section id='sesion'>
        {isLogged ? <Link className="btn btn-outline-primary btn-sm" onClick={handleClick} href='#'>LogOut</Link> :
        <Link to="/login" className="btn btn-outline-primary btn-sm">Login</Link> }
        </section>
        <Link to="/help" className="btn btn-outline-primary btn-sm">Help</Link>
        <Link to="/carrito" className="btn btn-outline-primary btn-sm">My Cart</Link>
      </div>
    </nav>
  );
}
