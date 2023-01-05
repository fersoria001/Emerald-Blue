import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const estilo = 
{height: "16px", width: "16px"}


export default function BarraDeNavegacion() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
    <Container fluid>
      <Navbar.Brand href="#home">
      <img className='d-inline-block rounded-circle align-top' src="" style={
        {height: "30px", width: "30px", background: "yellow"}
      } alt="logo" />
      {'  '} Emerald-Blue
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#help"> Ayuda </Nav.Link>
          <Nav.Link href="#proyectos"> Projects</Nav.Link>
          <NavDropdown title="Contacto" id="navbarScrollingDropdown" align="end">
            <NavDropdown.Item href="https://www.linkedin.com/in/fernandosoria1t">
              <img className='img-fluid' src="" style={estilo} alt='liicon' />
              Linkedin
              </NavDropdown.Item>
            <NavDropdown.Item href="https://www.github.com/fersoria001">
            <img className='img-fluid' src="" style={estilo} alt='ghicon' />
            GitHub
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://pdfhost.io/v/cMKh4HS0K_FernandoASoria ">
              Download my CV
            </NavDropdown.Item>
            <NavDropdown.Item href="#footer">
              Contacto
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
