import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
import { CartContextProvider } from "./context/CartContext.jsx";
import { UserContextProvider } from "./context/UserContext";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ReactQueryDevtools,
  ReactQueryDevtoolsPanel,
} from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./ErrorPage";
import Product from "./components/products/Product";
import Root from "./pages/Root";
import CheckOut from "./pages/CheckOut";
import CartItem from "./components/CartItem";
import Cart from "./pages/Cart";
import ProductPage from "./components/products/ProductPage";
import Vender from "./pages/Vender";
import Ingresar from "./pages/login/Ingresar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home />, errorElement: <ErrorPage /> },
      { path: "/producto", element: <Product />, errorElement: <ErrorPage /> },
      {
        path: "/categorias",
        element: <ProductPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/vender",
        element: <Vender />,
        errorElement: <ErrorPage />,
      }
      
    ],
  },
  {
    path: "/checkout",
    element: <CheckOut />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/cart-item",
        element: <CartItem />,
        errorElement: <ErrorPage />,
      },
    ],
  },  {
    path: "/ingresar",
    element: <Ingresar />,
    errorElement: <ErrorPage />,
  }

]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <SearchContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <RouterProvider router={router} />
            <ReactQueryDevtools />
          </ProductContextProvider>
        </CartContextProvider>
      </SearchContextProvider>
    </UserContextProvider>
  </QueryClientProvider>
);
