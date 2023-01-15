import { createContext, useState } from "react";

const CartContext = createContext({} //valor inicial
);

export function CartContextProvider({children}){
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState([])
    return <CartContext.Provider value={{show, setShow, cart, setCart}}>
        {children}
    </CartContext.Provider>
}
export default CartContext;