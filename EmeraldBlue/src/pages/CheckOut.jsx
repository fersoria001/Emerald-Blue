import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useCartProduct } from "../hooks/useCart";
import CartItem from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { useProduct, useProductById } from "../hooks/useProduct";
import "../styles/checkout.css";
export default function CheckOut() {
  const { cartProducts } = useContext(CartContext);
  const { isLoading, isError, error, data: storeItems } = useProduct();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message} </div>;

  return (
    <div className="checkout">
      <header className="checkout-head border-bottom">
        <h4 className="ms-5">
          {" "}
          <Link to="/home"> EMERALD-BLUE </Link>
        </h4>
        <p className="ms-auto me-5">COMPRA 100% SEGURA</p>
      </header>
      <section className="checkout-cart">
        <h3 className="text-center">CARRITO DE COMPRAS</h3>
        <div className="container-fluid">
          {" "}
          {cartProducts.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <div className="checkout-cart-resume mx-auto border border-dark">
          <div className="cart-resume-container">
            <input
              type="text"
              className="form-control border-bottom"
              placeholder="Código"
            />
            <button className="btn btn-outline-dark"> Añadir </button>

            <h4 className="text border-bottom">Subtotal</h4>
            <p>$</p>
            <h3 className="text border-bottom"> Total   {formatCurrency(
                  cartProducts.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )} </h3>
            <h5>$</h5>

            <button className="btn btn-dark" id="pagar">
              COMPLETAR COMPRA{" "}
            </button>
          </div>
        </div>
      </section>
      <span className="ms-auto">
        <p>Copyright © 2023 Fernando Soria - Todos los derechos reservados </p>
      </span>
    </div>
  );
}
