import React from "react";
import "../styles/footer.css";
export default function Footer() {
  return (
    <>
      <footer className="" id="footer">
        <div className="subscribe" id="subscribe">
          <h3> SUBSCRIBITE PARA CONOCER MAS </h3>
          <input type="email" placerholder="email" className="form-control-inline mx-auto"></input>
          <p>
            {" "}
            al registrarse y confirmar sus datos acepta nuestra{" "}
            <a href="">politica de privacidad</a>
          </p>
          <button className="btn btn-outline-dark mx-auto">Subscribirme</button>
        </div>
        <div className="footer-contenedor">
        <div className="fila">
            <h5> Redes sociales </h5>
            <i className="bi bi-facebook  p-1" > </i>
            <i className="bi bi-whatsapp  p-1" ></i>
            <i className="bi bi-instagram  p-1">  </i>
          </div>
          <div className="row">
          <div className="col-2">
            <h5> Ayuda </h5>
            <a href=""> Como comprar </a><br />
            <a href=""> acerca de nosotros</a><br />
            <a href=""> terminos y condiciones</a><br />
          </div>
          <div className="col">
            <h5> Links </h5>
            <a href="">Vender</a><br />
            <a href="">Ingresar</a><br />
            <a href="">Crear Cuenta</a><br />
          </div>
          <div className="col" id="info">
            <h3> Fernando Soria E-commerce</h3>
            <p>
              Esto es una version alfa y requiere de más contenido requiere
              investigar una licencia para compartir el codigo sin problemas
              cualquier problema escribirme a fernandosoria1379@gmail.com
            </p>
          </div>
          </div>
        </div>
        <p className="text-start px-2"> 
        Copyright © 2023 Fernando Soria - Todos los derechos reservados
        </p>
      </footer>
    </>
  );
}
