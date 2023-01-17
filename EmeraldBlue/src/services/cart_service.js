import axios from "axios";

const productsAPI = axios.create(
  //axios devuelve un objeto
  {
    baseURL: "http://localhost:3000/cart",
  }
);
export const createCartProduct = (cartproduct) => {
  productsAPI.post("/", cartproduct);
};
export const getCartProducts = async () => {
  const response = await productsAPI.get("/");
  return response.data;
};

export const getCartProductsByName = async (query) => {
  const response = await productsAPI.get("/?name=" + query);
  return response.data;
};
export const getCartProductById = async (id) => {
  const response = await productsAPI.get("/?id=" + id);
  return response.data;
};

export const getCartProductPage = async (page) => {
  const response = await productsAPI.get(`?_page=${page}&_limit=2`);
  return response.data;
};

export const deleteCartProduct = (id) => productsAPI.delete("/" + id);
export const deleteCart = () => productsAPI.delete("/");

export const updateCartProduct = (cartproduct) =>
  productsAPI.put("/" + cartproduct.id, cartproduct);

export const updateCart = (cartProducts) =>
  productsAPI.put("/", cartProducts);
