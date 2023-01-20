import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./barra_de_navegacion.css";
import emerald from "./emerald.png";
import useUser from "../../hooks/useUser";
import SearchContext from "../../context/SearchContext";
import Categorias from "./Categorias";
import { Dropdown } from "react-bootstrap";
import { Login } from "../../pages/login/Login.jsx";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import cafe from "../../../public/cup-svgrepo-com.svg"
export default function BarraDeNavegacion() {
  const { show, setShow } = useContext(CartContext);
  const handleClose = () => {
    setShow(!show);
    console.log(show);
  };
  const [isOpen, setIsOpen] = useState(false);

  const { isLogged, logout } = useUser();
  const handleClick = (e) => {
    e.preventDefault();
    logout();
    console.log("handle");
    console.log(isLogged.toString());
  };
  const { search, setSearch } = useContext(SearchContext);
  function buscar(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  function tipoIngreso() {
    setIsOpen({ isOpen: !isOpen });
  }
  const categorias = {
    uno: "Buzos",
    dos: "Remeras",
    tres: "Jeans",
  };
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <Link className="brand-name" to="/home"><img src={cafe} style={{height:"auto", width:"45px"}} /></Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <i className="bi bi-list"></i>
      </button>
      <button
        className="cart-icon"
        onClick={() => {
          setShow(!show);
        }}
      >
        <i className="bi bi-cart"></i>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
        <li>
           <Link to="/vender">Vender</Link>
          </li>
          <li>
           <Link to="/categorias" state={{category : "hombre"}}> Hombre</Link>
          </li>
          <li>
          <Link to="/categorias" state={{category : "mujer"}}> Mujer</Link>
          </li>
          <li>
          <Link to="/categorias" state={{category : "ofertas"}}>Ofertas</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
