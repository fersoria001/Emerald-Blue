import { createContext, useState } from "react";

const ProductContext = createContext({});

export function ProductContextProvider({ children }) {
  const [productId, setProductId] = useState(null);
  return (
    <ProductContext.Provider value={{ productId, setProductId }}>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContext;
