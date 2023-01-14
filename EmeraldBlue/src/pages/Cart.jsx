import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { useProduct } from '../hooks/useProduct';
import "../styles/cart.css"
function Cart({...props}) {
  const {show, setShow} = useContext(CartContext)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = {
    "name": "Remera de Boca",
    "price": "20000",
    "description": "Remera que uso un chango",
    "img": "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb3a31687/products/AD_GL4175/AD_GL4175-1.JPG",
    "inStock": true,
    "id": 4
  }
  return (
    <>


      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='cart-contenedor'>
          <div className='product-body'>
            <img src={data.img} />
            <span>
            <h5>{data.name}</h5>
            <p>{data.description}</p>
            </span>
            <span className='detalles'>
            <input type="number"/>
            <span>Precio  {data.price} $</span>
            </span>
        
            </div>
            <div className='cart-bot'>
              <p>Subtotal:</p>
              <span className='ms-auto py-1'>${data.price}</span>
              <p>Total:</p>
              <span className='ms-auto py-1'>${data.price} </span>
              <button className='btn btn-dark'>FINALIZAR COMPRA</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;