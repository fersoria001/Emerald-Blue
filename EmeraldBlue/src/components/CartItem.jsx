import React, { useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import { useProduct, useProductById } from "../hooks/useProduct";
import { useContext } from "react";
import { createCartProduct, deleteCart } from "../services/cart_service";
import { useCartProduct, useCartProductById } from "../hooks/useCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export default function CartItem({ id, quantity }) {
  const [item, setItem] = useState();
  const { removeFromCart, decreaseProductQuantity, increaseProductQuantity } =
    useContext(CartContext);
  const { isLoading, isError, data, error } = useProductById(id);
  console.log(`id= ${id}, quantity=${quantity}`)

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>{error.message}</div>;
  } else {
    return (
      <div className="contenedor-carro border">
        <img
          src={data[0].img}
          className="border"
          style={{ height: "auto", width: "90%" }}
        />
        <h5 className="el-nombre">{data[0].name}</h5>
        <div className="grid-mid-row">
          <p className="el-description">{data[0].description}</p>
          <p className="el-talle">Talle {data[0].size}</p>
        </div>
        <div className="grid-bot-row">
          <div className="el-cantidad-wrap">
            <button onClick={() => decreaseProductQuantity(data[0].id)}>
              {" "}
              -1
            </button>
            <p>{quantity}</p>
            <button onClick={() => increaseProductQuantity(data[0].id)}>
              {" "}
              + 1
            </button>
          </div>
          <p className="ms-auto mt-2 mx-1">
            {quantity > 1 ? data[0].price * quantity : data[0].price}
          </p>
          <button
            className="btn btn-outline-dark w-25 h-75"
            onClick={() => {
              removeFromCart(data[0].id);
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  }
}
