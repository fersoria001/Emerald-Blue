import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { useProduct, useProductById } from "../hooks/useProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "../styles/cart.css";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";

function Cart({ ...props }) {
  const {
    show,
    setShow,
    cartProducts,
  } = useContext(CartContext);
  const { isLoading, isError, error, data: storeItems } = useProduct();
  const handleClose = () => setShow(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message} </div>;
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="cart-wrapper">
            {cartProducts.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
            <div className="cart-bot border mt-5 py-5">
              <p>Subtotal</p>
              <span className="ms-auto py-1">subtotal</span>
              <p>
                Total{""}{" "}
                {formatCurrency(
                  cartProducts.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}{" "}
              </p>
              <span className="ms-auto py-1">total</span>
              <button className="btn btn-dark">
                <Link to="/checkout"> FINALIZAR COMPRA </Link>
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
