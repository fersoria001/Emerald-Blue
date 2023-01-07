import React from "react";

export default function Product({
  product,
  deleteProductMutation,
  updateProductMutation,
}) {
  return (
    <div className='card' style={{width:"18 rem"}} key={product.id}>
    <img src={product.img} class="card-img-top" alt="..." style={{height: "10rem", width: "10rem"}}/>
    <div className="card-body">
      <h3 className="card-title">{product.name}</h3>
      <p className="card-text">{product.description}</p>
      <p className="card-text">{product.price}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          deleteProductMutation.mutate(product.id);
        }}
      >
        {" "}
        Delete{" "}
      </button>
      <input
        type="checkbox"
        checked={product.inStock}
        id={product.id}
        onChange={(e) => {
          updateProductMutation.mutate({
            ...product,
            inStock: e.target.checked,
          });
        }}
      />
      <label htmlFor={product.id}>InStock</label>
      </div>
    </div>
  );
}
