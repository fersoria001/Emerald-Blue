import { createContext, useState } from "react";

const CartContext = createContext({} //valor inicial
);

export function CartContextProvider({children}){
    const [show, setShow] = useState(false);
    return <CartContext.Provider value={{show, setShow}}>
        {children}
    </CartContext.Provider>
}
export default CartContext;