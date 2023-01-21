import React from 'react'
import '../styles/home.css'
import flecha from '../assets/Vector.png';
import HomeBanner from './HomeBanner';
import ProductsList from '../components/products/ProductsList';
import pickupicon from "../assets/pickupoint.png"
import securepay from "../assets/securepay.png"
import envios from "../assets/envios.png"
import Footer from './Footer';
import subbaner from '../assets/subbanner1.jpg'
import leftimg from '../assets/mujer.jpeg'
import midimg from '../assets/hombre.jpeg'
import rightimg from '../assets/bothwm.jpeg'
import { Link } from 'react-router-dom';
export default function Home() {
  const imgStyle = {
    height: "25rem",
    maxWidth: "100%",

  }

  return (
    <>
    <section className='destacados'>
    <div >
    <HomeBanner />
    </div>
    <div className="container-fluid" style={{marginTop: "10vh",marginBottom:"10vh"}}>
   <p className='texto-top mx-auto'>10% OFF EN TU PRIMERA COMPRA SUSCRIBIENDOTE A NUESTRO NEWSLETTER</p>
   <div className='product-list-fullsize'>
    <ProductsList size={5}/>
    </div>
    <div className='product-list-lowvh'>
    <ProductsList size={2}/>
    </div>
        </div>
        <div className='container my-5' id="buzos">
          <img src={subbaner} className='img-fluid py-5 my-5 mx-auto' />
        </div>
        <div className='container-fluid' id='vermas'>
        <div className="card" id="vermas-card">
                <img src={leftimg} className="card-img-top" id='prever' style={imgStyle}/>
                <div className="card-body">
                  <h5 className='card-title'>Ropa de Mujer</h5>
                  <Link to="/categorias" state={{category: "mujer"}} className="a"> Ver más </Link>
                </div>
              </div>  <div className="card" id="vermas-card">
                <img src={rightimg} className="card-img-top" id='prever' style={imgStyle} />
                <div className="card-body">
                <h5 className='card-title'> Ofertas de Temporada </h5>
                <Link to="/categorias" state={{category: "ofertas"}} className="a"> Ver más </Link>
                </div>
              </div>  <div className="card" id="vermas-card">
                <img src={midimg} className="card-img-top" id='prever' style={imgStyle}/>
                <div className="card-body">
                <h5 className='card-title'>Ropa de Hombre</h5>
                <Link to="/categorias" state={{category: "hombre"}} className="a"> Ver más </Link>
                </div>
              </div>
        </div>
    </section>

    <section className='about-us mx-auto'>

      <div className="card">
                <img src={pickupicon} className="card-img-top" id="about-img"/>
                <div className="card-body">
                <a href=""> PICK UP POINT </a>
                <p> retire tus compras sin costo en el local</p>
                </div>
                </div>
                <div className="card">
                <img src={securepay} className="card-img-top" id="about-img"/>
                <div className="card-body">
                <a href=""> PAGOS SEGUROS </a>
                <p> Con nosotros tus pagos estan seguros</p>
                </div>
                </div>
                <div className="card">
                <img src={envios} className="card-img-top" id="about-img"/>
                <div className="card-body">
                <a href=""> ENVIOS A TODO EL PAIS </a>
                <p> Envios a todo el pais por oca o correo argentino</p>
                </div>
        </div>
    </section>
    <Footer />
    </>
  )
}
