import React from 'react'
import '../styles/home.css'
import flecha from '../assets/Vector.png';
import Banner from './HomeBanner';
import ProductsList from '../components/products/ProductsList';
import pickupicon from "../assets/pickupoint.png"
import securepay from "../assets/securepay.png"
import envios from "../assets/envios.png"
import Footer from './Footer';
import BarraDeNavegacion from '../components/barra_de_navegacion/BarraDeNavegacion';
export default function Home() {

  return (
    <>
    <section className='destacados'>
    <Banner />
    <div className="products">
   <p className='texto-top'>10% OFF EN TU PRIMERA COMPRA SUSCRIBIENDOTE A NUESTRO NEWSLETTER</p>
    <ProductsList />
        </div>
        <div className='container-fluid mx-auto p-2 justify-content-center' id="buzos">
          <img src='https://levisarg.vtexassets.com/assets/vtex.file-manager-graphql/images/8355a5f5-94f0-4e44-b3c3-406d30d7f2d0___2e067753ca25354f846d9c23248bc623.png' />
        </div>
        <div className='container-fluid justify-content-center' id='vermas'>
        <div className="card">
                <img src="https://media.gq.com.mx/photos/62ed694ef84edeef239b60b9/1:1/w_1428,h_1428,c_limit/ropa-basica-barata-para-hombre-cual-es-como-comprar.jpg" className="card-img-top" id='prever'/>
                <div className="card-body">
                  <a href="">Ver Mas</a>
                </div>
              </div>  <div className="card">
                <img src="https://media.gq.com.mx/photos/62ed694ef84edeef239b60b9/1:1/w_1428,h_1428,c_limit/ropa-basica-barata-para-hombre-cual-es-como-comprar.jpg" className="card-img-top" id='prever'/>
                <div className="card-body">
                <a href="">Ver Mas</a>
                </div>
              </div>  <div className="card">
                <img src="https://media.gq.com.mx/photos/62ed694ef84edeef239b60b9/1:1/w_1428,h_1428,c_limit/ropa-basica-barata-para-hombre-cual-es-como-comprar.jpg" className="card-img-top" id='prever'/>
                <div className="card-body">
                <a href="">Ver Mas</a>
                </div>
              </div>
        </div>
    </section>

    <section className='about-us'>

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
