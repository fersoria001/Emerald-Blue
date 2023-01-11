import React from "react";
import { Outlet } from "react-router-dom";
import BarraDeNavegacion from "./components/barra_de_navegacion/BarraDeNavegacion";
import Footer from "./pages/Footer";

export default function Layout() {
  return (
    <>
      <section className="layout">
        <header>
          <BarraDeNavegacion />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
}
