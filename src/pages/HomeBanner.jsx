import React from 'react'
import '../styles/home_banner.css';
import regalos from '../assets/regalos.jpg';
import regalos2 from '../assets/regalos2.jpg';
import regalos3 from '../assets/regalos3.jpeg';

export default function Banner() {
  return (
<div id="carouselbanner" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselbanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={regalos} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-block">
        <h5>titulo</h5>
        <p>descripcion</p>
        <a className="btn btn-primary" href="" role="button" target="_blank" rel="noopener noreferrer">Repository</a>
        <a className="btn btn-primary" href="" role="button" target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={regalos2} className="w-100" alt="..." />
      <div className="carousel-caption d-block">
        <h5>titulo</h5>
        <p>descripcion</p>
        <a className="btn btn-primary" href="" role="button" target="_blank" rel="noopener noreferrer">Repository</a>
        <a className="btn btn-primary" href="" role="button" target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={regalos3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-block">
        <h5>titulo</h5>
        <p>descripcion</p>
        <p> coming soon..</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselbanner" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselbanner" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
