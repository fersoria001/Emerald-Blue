import React from 'react'
import '../styles/home.css'
import flecha from '../assets/Vector.png';
import regalos from '../assets/regalos.jpg';
import ProductsList from '../components/products/ProductsList.jsx';

export default function Home() {
  return (
    <>

    <section className='destacados'>
    <div className='banner' id='banner'>
    <img src={regalos} className="d-block w-100" alt="..." />
    </div>
    </section>
    <section className='productos'>
      <h2> Productos </h2>
      <section className="productos-sesion" data-product>
      <ProductsList />
      </section>  
      <div className='container ms-auto'>
        Ver todo <img className='img-fluid' src={flecha} alt='flecha' />
      </div>
    </section>

    </>
  )
}
