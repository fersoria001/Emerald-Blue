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

  /* {
    if(isOpen) opcion = <Dropdown.Item>
      <button onClick={tipoIngreso} className="btn btn-primary-dark">
        Ingresar con usuario y contraseña
      </button>
    </Dropdown.Item>
    else opcion = <Dropdown.Item>
        <Login />
      </Dropdown.Item>

  }) */

  return (
    <header>
      <p className="container-fluid" style={{background: "#62b6b7"}}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000...{" "}
      </p>

      <nav className="navbar flex border-bottom">
        <div className="barra-nav-container">
          <span className="categorias">
            <Categorias titulo={"Hombres"} categorias={categorias} />
            <Categorias titulo={"Mujeres"} categorias={categorias} />

            <Link to="/ofertas" className="links">
              Ofertas
            </Link>
          </span>
          <Link to="/home" className="navbar-brand">
            <img
              src={emerald}
              width="40"
              className="marca"
              height="40"
              alt=""
            />
          </Link>
          <span className="interactuar">
            <input
              value={search}
              onChange={buscar}
              type="search"
              placeholder="Buscar..."
              className="busqueda"
            />
            <a>
              <i className="bi bi-search"></i>
            </a>
            {!isLogged ? (
              <Dropdown autoClose="outside">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    background: "white",
                    border: "none",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Ingresar
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {!isOpen ? (
                    <Dropdown.Item>
                      <button
                        onClick={tipoIngreso}
                        className="btn btn-primary-dark"
                      >
                        Ingresar con usuario y contraseña
                      </button>
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item>
                      <Login />
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <button onClick={(e) => handleClick(e)}>LogOut</button>
            )}
            <Link to="/historial">
              <i className="bi bi-bookmark-heart-fill"></i>
            </Link>

            <button onClick={handleClose} className="btn">
              <i className="bi bi-bag"></i>
            </button>
          </span>
        </div>
      </nav>
    </header>
  );
}
