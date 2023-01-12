import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products_service";
export const useProduct = () => useQuery({
    queryKey: ["products-search"],
    queryFn: getProducts,
  });