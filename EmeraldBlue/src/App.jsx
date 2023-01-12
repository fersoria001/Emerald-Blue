import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import BarraDeNavegacion from "./components/barra_de_navegacion/BarraDeNavegacion.jsx";
import SideBar from "./components/SideBar.jsx";
import Carrito from "./pages/Carrito.jsx";
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
import { UserContextProvider } from "./context/UserContext";
import { SideBarContextProvider } from "./context/SideBarContext";
import Footer from "./pages/Footer.jsx";
import "./App.css";
import SearchContext, { SearchContextProvider } from "./context/SearchContext.jsx";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <SideBarContextProvider>
        <SearchContextProvider>
          <BarraDeNavegacion />
          <SideBar />
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/help" element={<Categorias />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="/categorias" element={<Categorias />}></Route>
            <Route path="/ofertas" element={<Ofertas />}></Route>
            <Route path="/carrito" element={<Carrito />}></Route>
            <Route path="/crear_cuenta" element={<CrearCuenta />}></Route>
            <Route path="/historial" element={<Historial />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<LogOut />}></Route>
            <Route path="/mis_compras" element={<MisCompras />}></Route>
            <Route path="/vender" element={<Vender />}></Route>
            <Route path="/help" element={<Ayuda />}></Route>

            {/* <Footer /> */}
          </Routes>
          </SearchContextProvider>
        </SideBarContextProvider>
      </Router>
    </UserContextProvider>
  );
}

export default App;
