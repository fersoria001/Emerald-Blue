import React, { useEffect } from "react";
import { useProduct, useProductById } from "../../hooks/useProduct";
import "../../styles/productlist.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

export default function ProductsList() {
  const { productId, setProductId } = useContext(ProductContext);
  const { isLoading, isError, error, data } = useProduct();
  function clickProduct(id) {
    setProductId(id);
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const carouselItem = () => {
    let arrays = [];
    let size = 5;
    let i = 0;
    let item = null;
    for (i; i < data.length; i = i + size) {
      arrays.push(data.slice(i, i + size));
    }
    return arrays.map((array, i) => (
      <Carousel.Item key={i}>
        <div className="contenedor">
          {array.map((product) => (
            <Link to="/producto" state={{productId: product.id}} key={product.id}>
              <div className="columna">
                <div className="card">
                  <img src={product.imgUrl} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>{" "}
      </Carousel.Item>
    ));
  };

  return (
    <Carousel interval={4500} variant="dark">
      {carouselItem()}
    </Carousel>
  );
}
