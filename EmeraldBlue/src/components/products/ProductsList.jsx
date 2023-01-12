import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from "../../services/products_service";
import Product from "./Product";
import SearchContext from "../../context/SearchContext";
import { useContext } from 'react'

export default function ProductsList() {
  const {search, setSearch} = useContext(SearchContext)
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: products, // en este caso es un alias
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts, //parece q si o si debe ser una arrow function o llamada sin ()
    select: (products) => products.sort((a, b) => b.id - a.id),
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
  let resultado = [];
  if (!search) {
    resultado = products;
  }else{
    resultado = products.filter((item)=> item.name.includes(search))
  }

  return (
    <div className="container-fluid m-4">
      <div className="row">
        {products &&
          resultado.map((product) => (
            <div key={product.id} className="col-2 col-md-3 m-4">
              <div className="card" style={{ width: "30vh", height: "30vh" }}>
                <img
                  src={product.img}
                  className="card-img-top"
                  style={{ height: "10vh", width: "10vh" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <button>add to cart</button>
                </div>
              </div>
            </div>
            
          ))}
          
      </div>
    </div>
  );
}
