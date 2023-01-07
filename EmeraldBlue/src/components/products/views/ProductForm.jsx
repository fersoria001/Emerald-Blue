import React from "react";

export default function ProductForm({ handle }) {
  return (
    <form onSubmit={handle}>
        <div className="row">
          <div className="col">
            <label htmlFor="name"> Name </label>
            <input type="text" id="name" name="name" className="form-control-sm" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="description"> Description </label>
            <textarea
              type="text"
              id="description"
              name="description"
              rows="3"
              className="form-control-sm"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" className="form-control-sm"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary"> Add Product </button>
          </div>
        </div>
    </form>
  );
}
