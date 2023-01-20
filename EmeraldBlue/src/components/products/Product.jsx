import React from "react";
import { useProductById } from "../../hooks/useProduct";
import Footer from "../../pages/Footer";
import "../../styles/product.css";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ProductsList from "./ProductsList";

export default function Product() {
  const location = useLocation();
  const { productId } = location.state;
  const { setShow, cartProducts, increaseProductQuantity } =
    useContext(CartContext);
  const {
    isLoading,
    isError,
    error,
    data: product,
  } = useProductById(productId);

  function handleAdd(e) {
    e.preventDefault();
    increaseProductQuantity(productId);
    setShow(true);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>{error.message}</div>;
  } else {
    return (
      <>
        <div className="galery border">
          {/* <div className="galery-left">
          <div className="galery-top">
            <img src={product[0].img} className="" />
          </div>
          <div className="galery-mid">
            <img src={product[0].img} />
          </div>
          <div className="galery-bot">
            <img src={product[0].img} />
          </div>
        </div> */}
          <div className="galery-right">
            <img src={product[0].imgUrl} />
          </div>
        </div>
        <div className="product-details">
          <div className="details-left">
            <h1>{product[0].name}</h1>
          </div>
          <div className="details-right">
            <p>CODIGO {product[0].id}</p>
            <h3>${product[0].price}</h3>
            <h5> Escoja el talle: </h5>
            <div className="botones-grid">
              <span>
                <input
                  type="radio"
                  value="xs"
                  id="xs"
                  onChange={(e) => selectSize(e)}
                />
                <label htmlFor="xs">XS</label>
              </span>
              <span>
                <input
                  type="radio"
                  value="s"
                  id="s"
                  onChange={(e) => selectSize(e)}
                />{" "}
                <label htmlFor="s">S</label>
              </span>
              <span>
                <input
                  type="radio"
                  value="m"
                  id="m"
                  onChange={(e) => selectSize(e)}
                />{" "}
                <label htmlFor="m">M</label>
              </span>
              <span>
                <input
                  type="radio"
                  value="l"
                  id="l"
                  onChange={(e) => selectSize(e)}
                />{" "}
                <label htmlFor="l">L</label>
              </span>
              <span>
                <input
                  type="radio"
                  value="xl"
                  id="xl"
                  onChange={(e) => selectSize(e)}
                />{" "}
                <label htmlFor="xl">XL</label>{" "}
              </span>
            </div>
            <button
              className="btn btn-outline-dark me-2"
              type="submit"
              onClick={(e) => handleAdd(e)}
            >
              Agregar al Carrito
            </button>
            <button className="btn btn-outline-dark"><i className="bi bi-star"></i></button> <br />
            <a> RETIRO EN TIENDA</a> <br />
            <h5>Descripcion: </h5>
            <p>{product[0].description}</p>
          </div>
        </div>
        <section className="more-prod">
          <h2 className="mx-auto">QUIZAS TAMBIEN TE GUSTEN</h2>
          <div className="more-prod-galery my-4">
            <ProductsList />
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
