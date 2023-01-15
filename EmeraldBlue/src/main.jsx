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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home />, errorElement: <ErrorPage /> },
      { path: "/producto", element: <Product />, errorElement: <ErrorPage />},
    ],
  },
  {
    path: "/checkout",
    element: <CheckOut />,
    errorElement: <ErrorPage />
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
