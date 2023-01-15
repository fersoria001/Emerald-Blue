import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useProduct, useProductById } from "../../hooks/useProduct";
import Footer from "../../pages/Footer";
import "../../styles/product.css";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Cart from "../../pages/Cart";
export default function Product() {
  const {product} = useContext(ProductContext);
  const {cart, setCart, setShow} = useContext(CartContext);
  const { isLoading, isError, error, data } = useProductById(product); 
  function addToCart(id){
    setCart([...cart, id]);
    setShow(true);
  }
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return data && (
    <>
      <span>{" Home > Hombre > Remeras > Remera de boca"}</span>
      <div className="galery">
        <div className="galery-left">
          <div className="galery-top">
            <img src={data[0].img} className="" />
          </div>
          <div className="galery-mid">
            <img src={data[0].img} />
          </div>
          <div className="galery-bot">
            <img src={data[0].img} />
          </div>
        </div>
        <div className="galery-right">
          <img src={data[0].img} />
        </div>
      </div>
      <div className="product-details">
        <div className="details-left">
          <h1>{data[0].name}</h1>
        </div>
        <div className="details-right">
          <p>CODIGO {data[0].id}</p>
          <h3>${data[0].price}</h3>
          <h4>Selecciona el talle</h4>
          <div className="botones-grid">
            <button className="btn btn-outline-dark">28</button>
            <button className="btn btn-outline-dark">30</button>
            <button className="btn btn-outline-dark">32</button>
            <button className="btn btn-outline-dark">34</button>
            <button className="btn btn-outline-dark">36</button>
            <button className="btn btn-outline-dark">38</button>
          </div>
          <button onClick={()=>addToCart(data[0])}>Agregar al Carrito</button>
          <button>Like</button> <br />
          <a> RETIRO EN TIENDA</a> <br />
          <p>{data[0].description}</p>
        </div>
      </div>
      <section className="more-prod">
        <h2>QUIZAS TAMBIEN TE GUSTEN</h2>
        <div className="more-prod-galery">
          <span>
            <img src={data[0].img} />
            <h5>{data[0].name}</h5>
            <p>${data[0].price}</p>
          </span>
          <span>
            <img src={data[0].img} />
            <h5>{data[0].name}</h5>
            <p>${data[0].price}</p>
          </span>
          <span>
            <img src={data[0].img} />
            <h5>{data[0].name}</h5>
            <p>${data[0].price}</p>
          </span>{" "}
        </div>
      </section>
      <Footer />
    </>
  );
}
