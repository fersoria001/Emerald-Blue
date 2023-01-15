import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductsById } from "../services/products_service";
export const useProduct = () => useQuery({
    queryKey: ["products-search"],
    queryFn: getProducts,
  });

export const useProductById = (id) => useQuery({
  queryKey: [id],
  queryFn: () => getProductsById(id)
});