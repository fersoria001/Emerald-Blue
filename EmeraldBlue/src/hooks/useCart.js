import { useQuery } from "@tanstack/react-query";
import { getCartProducts, getCartProductById } from "../services/cart_service";
export const useCartProduct = () => useQuery({
    queryKey: ["cart-product"],
    queryFn: getCartProducts,
  });

export const useCartProductById = (id) => useQuery({
  queryKey: [id],
  queryFn: () => getCartProductById(id)
});

