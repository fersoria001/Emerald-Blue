import React from "react";
import { useLocation } from "react-router-dom";
import { useProductCategory } from "../../hooks/useProduct";
import CartItem from "../CartItem";
import "../../styles/productpage.css"
import ProductItem from "./ProductItem";
import Footer from "../../pages/Footer";
export default function ProductPage() {
  const location = useLocation();
  const { category } = location.state;
  const { isLoading, error, data } = useProductCategory(category);

  if (isLoading) return <div> Loading ...</div>;
  else if (error) return <div> Error : {error.message} </div>;
  return (
    <>
    <div className="container-fluid my-5">
    <div className="propage-left me-auto">
      <h3> CATEGORIAS </h3>
      <h5>Categoria 1</h5>
    </div>
      <div className="propage-grid ms-auto">
        {data.map((producto) => (
          <ProductItem  {...producto}  key={producto.id}/>
        ))}
      </div>
     
    </div>
    <Footer />
    </>
  );
}
