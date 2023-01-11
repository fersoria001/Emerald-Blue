import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from "./service/products_service";


export default function Products(){
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
  
  return products.map(product => (
    <div key={product.id}>
    <h3>{product.nombre}</h3>
    <p>{product.descripcion}</p>
    <p>{product.precio}</p>  
    <button onClick={ () => {deleteProductMutation.mutate(product.id)}}>Delete</button>
    <input type="checkbox"
    id={product.id}
    name="inStock"
    className="form-control-sm"
    onChange={e => {
      updateProductMutation.mutate({
        ...product,
        inStock: e.target.checked,
      })
    }} />
    <label htmlFor={product.id}> In stock?</label>
  </div>
  ));     
};
