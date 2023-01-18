import React from "react";
import { useLocation } from "react-router-dom";
import { useProductCategory } from "../../hooks/useProduct";
import CartItem from "../CartItem";

export default function ProductPage() {
  const location = useLocation();
  const { category } = location.state;
  const { isLoading, error, data } = useProductCategory(category);

  if (isLoading) return <div> Loading ...</div>;
  else if (error) return <div> Error : {error.message} </div>;
  return (
    <div className="container w-75 mt-5 py-5">
      <div className="row">
        {data.map((producto) => (
            <div className="col-4" key={producto.id}>
          <CartItem  {...producto} />
          </div>
        ))}
      </div>
    </div>
  );
}
