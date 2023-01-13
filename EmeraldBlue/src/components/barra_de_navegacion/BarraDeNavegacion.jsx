import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./barra_de_navegacion.css";
import emerald from "./emerald.png";
import useUser from "../../hooks/useUser";
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import Categorias from "./Categorias";
export default function BarraDeNavegacion() {
  const [isOpen, setIsOpen] = useState(false);

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
  function toggleOpen() {
    setIsOpen({ isOpen: !isOpen });
    console.log(isOpen);
  }
  const categorias = {
    uno: "Buzos",
    dos: "Remeras",
    tres: "Jeans",
  };

  return (
    <header>
      <nav className="barra-nav">
        <div className="anuncio px-auto">

          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 ...{" "}
        </div>

        <div className="barra-nav-container">
          <span className="categorias">
            <Categorias titulo={"Hombres"} categorias={categorias} />
            <Categorias titulo={"Mujeres"} categorias={categorias} />

            <Link to="/ofertas" className="links">
             Ofertas
            </Link>
          </span>
          <Link to="/" className="navbar-brand">
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
            <Link to="/crear_cuenta" className="links">
              Ingresar
            </Link>
            <Link to="/historial">
              <i className="bi bi-bookmark-heart-fill"></i>
            </Link>
            <Link to="/carrito">
              <i className="bi bi-bag"></i>
            </Link>
          </span>
        </div>
      </nav>
    </header>
  );
}
