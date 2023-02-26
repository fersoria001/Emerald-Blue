import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emerald from "./emerald.png";
import useUser from "../../hooks/useUser";
import SearchContext from "../../context/SearchContext";
import Categorias from "./Categorias";
import { Dropdown } from "react-bootstrap";
import { Login } from "../../pages/login/Login.jsx";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import cafe from "../../../public/cup-svgrepo-com.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, FormControl, Button } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';

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
  const expand = "lg";
  
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <Navbar bg="light border" expand="lg">   
      <Container fluid>
      <Navbar.Brand>
          <Link to="/home">
            <img
              src={cafe}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="cafe logo"
            />{" "}
          </Link>
        </Navbar.Brand>
      <Form className="d-flex pe-5">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
      <Button className="ms-auto" onClick={handleClose}><i className="bi bi-cart"></i></Button>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Navbar.Brand>
          <Link to="/home">
            <img
              src={cafe}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="cafe logo"
            />{" "}
          </Link>
        </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-auto">
                  <NavDropdown
                    title="Ingresar"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3"><Link> Ingresar </Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    <Link> Crear Cuenta </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Ingresar con google
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Categorias"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3"><Link> Hombre </Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <Link>Mujer</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      <Link>Ofertas</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            
      </Container>
    </Navbar>
  );
}
