import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./barra_de_navegacion.css";
import emerald from "./emerald.png";
import useUser from "../../hooks/useUser";
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import Dropdown from 'react-bootstrap/Dropdown';



export default function BarraDeNavegacion() {
  const { isLogged, logout } = useUser();
  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  const { search, setSearch } = useContext(SearchContext);
  function buscar(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-5">
          <img src={emerald} width="40" height="40" alt="" />
        </Link>
        <form className="form-inline p-3 mx-auto">
          <input
            value={search}
            onChange={buscar}
            type="text"
            placeholder="Search..."
            className="form-control-inline"
          />
          <button className="btn btn-success ms-2" type="submit">
            Search
          </button>
        </form>
        <span className="text me-5"> ANUNCIO PROPIO </span>
      </div>
      <div className="container py-2">
      <Dropdown>
      <Dropdown.Toggle className="btn btn-secondary btn-sm" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Mates</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Termos</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bombillas</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        <Link to="/ofertas" className="btn btn-primary btn-sm">
          For Sale
        </Link>
        <Link to="/historial" className="btn btn-primary btn-sm">
          History
        </Link>
        <Link to="/mis_compras" className="btn btn-primary btn-sm">
          My Buys
        </Link>
        <Link to="/vender" className="btn btn-primary btn-sm">
          Sell
        </Link>
        <Link to="/crear_cuenta" className="btn btn-primary btn-sm">
          Create Account
        </Link>
        <section id="sesion">
          {isLogged ? (
            <Link
              className="btn btn-primary btn-sm"
              onClick={handleClick}
              href="#"
            >
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </section>
        <Link to="/help" className="btn btn-primary btn-sm">
          Help
        </Link>
        <Link to="/carrito" className="btn btn-primary btn-sm">
          My Cart
        </Link>
      </div>
    </nav>
  );
}
