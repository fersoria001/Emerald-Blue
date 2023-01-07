import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from "./service/products_service";
import Product from "./views/Product";


export default function ProductsList(){
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

  if (isLoading) return <div> Loading ...</div>;
  else if (isError) return <div> Error : {error.message} </div>;
  

  const productCards = products.map((product) => (
    <div className="col-3 my-2 px-2">
    <Product
      product={product}
      updateProductMutation={updateProductMutation}
      deleteProductMutation={deleteProductMutation}
    />
    </div> ))
  const productRow = 
    <div className="row mx-5">
      {productCards}
    </div>
  return (
    <div className="container-fluid mt-5">
      {productRow}
    </div>)
  ;
};
