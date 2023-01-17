import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useProduct, useProductById } from "../../hooks/useProduct";
import Footer from "../../pages/Footer";
import "../../styles/product.css";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Cart from "../../pages/Cart";
import ProductsList from "./ProductsList";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCartProduct, updateCartProduct } from "../../services/cart_service";
import { useCartProductById } from "../../hooks/useCart";

export default function Product() {
  const { productId, setProductId } = useContext(ProductContext);
  const { setShow, cartProducts, increaseProductQuantity } = useContext(CartContext);
  const {isLoading, isError, error, data:product} = useProductById(productId);

  function handleAdd(e){
    e.preventDefault();
    increaseProductQuantity(productId);
    setShow(true);
  }

  if(isLoading){return <div>Loading...</div>}
  else if(isError){ return <div>{error.message}</div>}
  else {
  return (
    <>
      <div className="galery">
        <div className="galery-left">
          <div className="galery-top">
            <img src={product[0].img} className="" />
          </div>
          <div className="galery-mid">
            <img src={product[0].img} />
          </div>
          <div className="galery-bot">
            <img src={product[0].img} />
          </div>
        </div>
        <div className="galery-right">
          <img src={product[0].img} />
        </div>
      </div>
      <div className="product-details">
        <div className="details-left">
          <h1>{product[0].name}</h1>
        </div>
        <div className="details-right">
          <p>CODIGO {product[0].id}</p>
          <h3>${product[0].price}</h3>
          <label htmlFor="xs">XS</label>
          <input
            type="radio"
            value="xs"
            id="xs"
            onChange={(e) => selectSize(e)}
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => handleAdd(e) }
          >
            Agregar al Carrito
          </button>
          <button>Like</button> <br />
          <a> RETIRO EN TIENDA</a> <br />
          <p>{product[0].description}</p>
        </div>
      </div>
      <section className="more-prod">
        <h2>QUIZAS TAMBIEN TE GUSTEN</h2>
        <div className="more-prod-galery">
          <ProductsList />
        </div>
      </section>
      <Footer />
    </>
  );}
}
