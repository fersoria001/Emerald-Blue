import React from 'react'
import '../styles/home_banner.css';
import regalos from '../assets/regalos.jpg';
import regalos2 from '../assets/regalos2.jpg';
import regalos3 from '../assets/regalos3.jpeg';

export default function HomeBanner() {
  return (
<div id="carousel" className="carousel carousel-dark slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" id="carousel-item">
      <img src={regalos} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id="carousel-item">
      <img src={regalos2} className="w-100" alt="..." />
  
    </div>
    <div className="carousel-item" id="carousel-item">
      <img src={regalos3} className="d-block w-100" alt="..." />

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
