import React from 'react'
import '../styles/home.css'
import flecha from '../assets/Vector.png';
import regalos from '../assets/regalos.jpg';
import ProductsList from '../components/products/ProductsList';
export default function Home() {
  return (
    <>
    <section className='destacados'>
    <div className="banner">
    <img src={regalos} className="d-block w-100" alt="..." />
    </div>
    <div className="text-center">
    <ProductsList />
          <img className="img-fluid" src={flecha} alt="flecha" />
          Ver todo
        </div>
    </section>
    </>
  )
}
