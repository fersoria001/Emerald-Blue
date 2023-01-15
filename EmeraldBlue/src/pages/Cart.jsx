import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { useProduct, useProductById } from "../hooks/useProduct";

import "../styles/cart.css";
function Cart({ ...props }) {
  const { show, setShow, cart, setCart } = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(cart)
  const cartItems = cart.map((el) => (
<div key={el.id} className="cart-contenedor">
                <div className="product-body">
                  <img src={el.img} />
                  <span>
                    <h5>{el.name}</h5>
                    <p>{el.description}</p>
                  </span>
                  <span className="detalles">
                    <input type="number" />
                    <span>Precio {el.price} $</span>
                  </span>
                </div>
              </div>
    ));
  return (
    <>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body>
        <div className = "cart-wrapper">
        {cartItems}
        {/*       <div key={cart[0].id} className="cart-contenedor">
                <div className="product-body">
                  <img src={cart[0].img} />
                  <span>
                    <h5>{cart[0].name}</h5>
                    <p>{cart[0].description}</p>
                  </span>
                  <span className="detalles">
                    <input type="number" />
                    <span>Precio {cart[0].price} $</span>
                  </span>
                </div>
              </div> */}
    

          <div className="cart-bot">
            <p>Subtotal:</p>
            <span className="ms-auto py-1">subtotal</span>
            <p>Total:</p>
            <span className="ms-auto py-1">total</span>
            <button className="btn btn-dark">FINALIZAR COMPRA</button>
          </div>
          </div>
        </Offcanvas.Body>

      </Offcanvas>

    </>
  );
}

export default Cart;
