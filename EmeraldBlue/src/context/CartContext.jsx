import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { NavItem } from "react-bootstrap";
import { getCartProductById, updateCart } from "../services/cart_service";

const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [show, setShow] = useState(false);
  const [cartProducts, setCartProducts] = useState([])



  function increaseProductQuantity(id) {
    setCartProducts((prev) => {
      if(prev.find(item=>item.id === id)==null){
        return [...prev, {id, quantity:1}]
      }else{
        return prev.map(item=>{
          if(item.id === id){
            return {...item, quantity: item.quantity + 1}
          } else {
            return item;
          }
        })
      }
    })
  }

  
  function decreaseProductQuantity(id){
    setCartProducts(prev =>{
      if(prev.find(item=>item.id===id)?.quantity===1){
        return prev.filter(item=>item.id!==id)
      }else{
        return prev.map(item=>{
          if(item.id===id){
            return{...item, quantity: item.quantity - 1}
          }else{
            return item
          }
        })
      }
    })
  }


  function removeFromCart(id) {
    setCartProducts((currentCartProducts) => {
      return currentCartProducts.filter((item) => item.id !== id);
    });
  }


  return (
    <CartContext.Provider
      value={{
        show,
        setShow,
        cartProducts,
        setCartProducts,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
