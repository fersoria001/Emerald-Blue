import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductsById, getProductByCategory } from "../services/products_service";
export const useProduct = () => useQuery({
    queryKey: ["products-search"],
    queryFn: getProducts,
  });

export const useProductById = (id) => useQuery({
  queryKey: [id],
  queryFn: () => getProductsById(id)
});

export const useProductCategory = (category) => useQuery({
  queryKey: ["category", category],
  queryFn:() => getProductByCategory(category)
});