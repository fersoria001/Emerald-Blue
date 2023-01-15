import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import "../styles/checkout.css";
export default function CheckOut() {
  const { cart, setCart} = useContext(CartContext);

  const cartItems = cart.map((el) => (
    <div key={el.id} className="cart-contenedor">
      <div className="product-body">
        <img src={el.img} />
        <span>
          <h5>{el.name}</h5>
          <p>{el.description}</p>
        </span>
        <span className="detalles">
        <label htmlFor="cantidad" >Cantidad</label>
          <input type="number" id="cantidad"/>
          <h4>Precio {el.price} $</h4>
        </span>
      </div>
    </div>
  ));
  return (
    <div className="checkout">
      <header className="checkout-head border-bottom">
      <h4 className="ms-5"> <Link to="/home"> EMERALD-BLUE </Link></h4>
        <p className="ms-auto me-5">COMPRA 100% SEGURA</p>
      </header>
      <section className="checkout-cart">
        <h3 className="text-center">CARRITO DE COMPRAS</h3>
        <div className="checkout-cart-prod mx-auto border border-dark">{cartItems}</div>
        <div className="checkout-cart-resume mx-auto border border-dark">
        
        <div className="cart-resume-container">
        
            <input type="text" className="form-control border-bottom" placeholder="Código"/><button className="btn btn-outline-dark"> Añadir </button>
            
            <h4 className="text border-bottom">Subtotal</h4>
            <p>$</p>
            <h3 className="text border-bottom"> Total </h3>
            <h5>$</h5>
     
            <button className="btn btn-dark" id="pagar">COMPLETAR COMPRA </button>
            </div>
        </div>
      </section>
      <span className="ms-auto"><p>Copyright © 2023 Fernando Soria - Todos los derechos reservados </p></span>
     
    </div>
  );
}
