import React from "react";
import { createProduct } from "../../services/products_service";
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
    const newProd = Object.fromEntries(formData);
    addProductMutation.mutate({
      ...newProd,
    });
    alert("Producto agregado con exito")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            Product Name
            <input type="text" id="name" className="form-control" name="name" />
            <label className="form-label" htmlFor="name"></label>
            <input type="text" id="category" className="form-control" name="category" />
            <label className="form-label" htmlFor="category">Categoria</label>
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            Price
            <input
              type="number"
              id="price"
              className="form-control"
              name="price"
            />
            <label className="form-label" htmlFor="price"></label>
          </div>
        </div>
      </div>

      <div className="form-outline mb-4">
        Description
        <textarea
          type="text"
          id="description"
          className="form-control"
          name="description"
          rows="3"
        />
        <label className="form-label" htmlFor="description"></label>
      </div>

      <div className="form-outline mb-4">
        <input type="text" id="img" className="form-control" name="imgUrl" />
        <label className="form-label" htmlFor="img">
          Image URL
        </label>
      </div>
      <div className="container text-center">
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Add Product
        </button>
      </div>
    </form>
  );
}
