import React, { useState } from "react";
import {CartContextProvider} from "./context/CartContext.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import BarraDeNavegacion from "./components/barra_de_navegacion/BarraDeNavegacion.jsx";
import Cart from "./pages/Cart.jsx";
import { CrearCuenta } from "./pages/CrearCuenta.jsx";
import MisCompras from "./pages/MisCompras.jsx";
import Historial from "./pages/Historial.jsx";
import { Login } from "./pages/login/Login.jsx";
import Vender from "./pages/Vender.jsx";
import Ayuda from "./pages/Ayuda.jsx";
import Home from "./pages/Home.jsx";
import Categorias from "./pages/Categorias.jsx";
import Ofertas from "./pages/Ofertas.jsx";
import LogOut from "./pages/LogOut";
import CreadoConExito from "./pages/login/CreadoConExito.jsx";
import { UserContextProvider } from "./context/UserContext";
import Footer from "./pages/Footer.jsx";
import "./App.css";
import SearchContext, {
  SearchContextProvider,
} from "./context/SearchContext.jsx";
import Product from "./components/products/Product.jsx";
import Ingresar from "./pages/login/Ingresar.jsx"
import Registrarse from "./pages/login/Registrarse.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";
function App() {
  return (
    <UserContextProvider>
      <Router>
        <SearchContextProvider>
        <CartContextProvider>
        <ProductContextProvider>
          <BarraDeNavegacion />
          <div className="rutas">
          <Cart placement='end'/>
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/help" element={<Categorias />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="/categorias" element={<Categorias />}></Route>
            <Route path="/ofertas" element={<Ofertas />}></Route>
          {/*   <Route path="/carrito" element={<Cart />}></Route> */}
            <Route path="/crear_cuenta" element={<Ingresar />}></Route>
            <Route path="/registrarse" element={<Registrarse />}></Route>
            <Route path="/usuario_creado_con_exito" element={<CreadoConExito />} ></Route>
            <Route path="/producto" element={<Product />}></Route>
            <Route path="/login" element={<Ingresar />}></Route>
            <Route path="/logout" element={<LogOut />}></Route>
            <Route path="/mis_compras" element={<MisCompras />}></Route>
            <Route path="/vender" element={<Vender />}></Route>
            <Route path="/help" element={<Ayuda />}></Route>
          </Routes>
          </div>
          </ProductContextProvider>
          </CartContextProvider>
        </SearchContextProvider>
      </Router>
    </UserContextProvider>
  );
}

export default App;
