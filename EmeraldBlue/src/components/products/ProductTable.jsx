import React, { useState, useEffect } from "react";
import SearchContext from "../../context/SearchContext";
import { useContext } from 'react'
import { useProduct } from "../../hooks/useProduct";
export default function ProductTable() {
  const {search, setSearch} = useContext(SearchContext)
  const {data} = useProduct();
  let resultado = [];
  if (!search) {
    resultado = data;
  }else{
    resultado = data.filter((item)=> item.name.includes(search))
  }
  return (
    <div className="container">
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="text-white" style={{ background: "black" }}>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {resultado &&
            resultado.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.inStock ? "true" : "false"}</td>
                <td>
                  <img
                    style={{ height: "60px", width: "60px" }}
                    src={item.imgUrl}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

