import React from "react";
import { createProduct } from "./service/products_service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function ProductForm() {
  const addProductMutation = useMutation({
    mutationFn: createProduct, //crea la funcion debe ser invocada luego
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      alert("Agregaste con exito el producto" + product.id); //invalidar la anterior y volver a listar
    },
  });

  const queryClient = useQueryClient();

  function handleSubmit(e) {
    e.preventDefault(e);
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    addProductMutation.mutate({
      ...product,
      inStock: true,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <label htmlFor="nombre"> Name </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control-sm"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="descripcion"> Description </label>
          <textarea
            type="text"
            id="descripcion"
            name="descripcion"
            rows="3"
            className="form-control-sm"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="precio">Price</label>
          <input
            type="number"
            id="precio"
            name="precio"
            className="form-control-sm"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="imagen">ImagenURL</label>
          <input
            type="text"
            id="imagen"
            name="img"
            className="form-control-sm"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary"> Add Product </button>
          <p></p>
        </div>
      </div>
    </form>
  );
}
