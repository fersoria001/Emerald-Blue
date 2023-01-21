import React from "react";
import "../styles/footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer border-top" id="footer">
        <div className="footer-subscribe pb-2" id="subscribe">
          <h3> SUBSCRIBITE PARA CONOCER MÁS </h3>
          <input
            type="email"
            placeholder="E-mail"
            className="form-control-inline mx-auto"
          />
          <p>
            Al registrarse y confirmar sus datos acepta nuestra{" "}
            <a href="">politica de privacidad.</a>
          </p>
          <button className="btn btn-outline-light mx-auto">Subscribirme</button>
        </div>
        <div className="footer-contenedor">
          <div className="fila pb-5 pt-2">
            <h5> Redes sociales </h5>
            <a href="https://www.facebook.com" className="a"> <i className="bi bi-facebook  p-1"> </i></a>
            <a >  <i className="bi bi-whatsapp  p-1"></i></a>
            <a href="https://www.instagram.com/fersoria.1" className="a"> <i className="bi bi-instagram  p-1"> </i></a>
          </div>
          <div className="footer-grid">
            <div className="footer-grid-col">
              <h5> Ayuda </h5>
              <a href="" > Como comprar </a>
              <br />
              <a href=""> Acerca de nosotros</a>
              <br />
              <a href=""> Terminos y condiciones</a>
              <br />
            </div>
            <div className="footer-grid-col">
              <h5> Links Utiles</h5>
              <a href="">Vender</a>
              <br />
              <a href="">Ingresar</a>
              <br />
              <a href="">Crear Cuenta</a>
              <br />
            </div>
            <div className="info">
              <h3> Fernando Soria E-commerce</h3>
              <p>
                Esto es una version alfa y requiere de más contenido requiere
                investigar una licencia para compartir el codigo sin problemas
                cualquier problema escribirme a fernandosoria1379@gmail.com
              </p>
            </div>
          </div>
        </div>
        <h5 className="text-start px-2">
          Copyright © 2023 Fernando Soria - Todos los derechos reservados
        </h5>
      </footer>
    </>
  );
}
