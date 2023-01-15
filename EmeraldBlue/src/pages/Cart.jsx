import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { useProduct, useProductById } from "../hooks/useProduct";

import "../styles/cart.css";
import { Link } from "react-router-dom";
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
                  <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" id="cantidad"/>
                    <span className="ps-4">Precio {el.price} $</span>
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
          <div className="cart-bot">
            <p>Subtotal:</p>
            <span className="ms-auto py-1">subtotal</span>
            <p>Total:</p>
            <span className="ms-auto py-1">total</span>
            <button className="btn btn-dark"><Link to="/checkout"> FINALIZAR COMPRA </Link></button>
          </div>
          </div>
        </Offcanvas.Body>

      </Offcanvas>

    </>
  );
}

export default Cart;
