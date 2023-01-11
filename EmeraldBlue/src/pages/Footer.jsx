import React from "react";
import "../styles/footer.css";
export default function Footer() {
  return (
    <>
      <footer className="" id="footer">
      <div className="contenedor-flex">
        <div className="columna">
          <h5> Redes sociales </h5>
          <a href=""> Instagram </a>
          <a href=""> Facebook</a>
          <a href=""> TikTok </a>
        </div>
        <div className="columna">
          <h5> Ayuda </h5>
          <a href=""> Como comprar </a>
          <a href=""> acerca de nosotros</a>
          <a href=""> terminos y condiciones</a>
        </div>
        <div className="columna">
          <h5> Links </h5>
          <a href="">Vender</a>
          <a href="">Ingresar</a>
          <a href="">Crear Cuenta</a>
        </div>
        <div className="columna" id="info">
          <h3> Fernando Soria E-commerce</h3>
          <p>
            Esto es una version alfa y requiere de más contenido requiere
            investigar una licencia para compartir el codigo sin problemas
            cualquier problema escribirme a fernandosoria1379@gmail.com
          </p>
        </div>
        </div>
        <p className="text-center"> copyright </p>
      </footer>
    </>
  );
}
