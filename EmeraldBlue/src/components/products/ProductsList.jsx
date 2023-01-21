import React, { useEffect } from "react";
import { useProduct, useProductById } from "../../hooks/useProduct";
import "../../styles/productlist.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

export default function ProductsList({size}) {
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

    let i = 0;
    let item = null;
    for (i; i < data.length; i = i + size) {
      arrays.push(data.slice(i, i + size));
    }
    return arrays.map((array, i) => (
      <Carousel.Item key={i}>
        <div className="contenedor">
          {array.map((product) => (
            <Link className="a" to="/producto" state={{productId: product.id}} key={product.id}>
              <div className="columna">
                <div className="list-prod">
                  <img src={product.imgUrl} className="list-prod-img" />
                  <div className="list-prod-details">
                    <h5 className="list-prod-details-title">{product.name}</h5>
                    <p className="list-prod-details-text">${product.price}</p>
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
