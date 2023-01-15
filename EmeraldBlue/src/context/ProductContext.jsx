import { createContext, useState } from "react";

const ProductContext = createContext({} //valor inicial
);

export function ProductContextProvider({children}){
    const [product, setProduct] = useState("");
    return <ProductContext.Provider value={{product, setProduct}}>
        {children}
    </ProductContext.Provider>
}
export default ProductContext;