import React from "react";
import AddProductModal from "../components/products/AddProductModal";
import ProductTable from "../components/products/ProductTable";
import UsersList from "../components/users/UsersList";
import "../styles/vender.css"
export default function Vender() {
  return (
    <div className="admin-panel">
    <section className="usuarios">
      Administrar usuarios
      <UsersList />
    </section>
    <section className="ver-compras">
      COMPRAS
    </section>
      <section className="productos">
        <h2 className="text-center"> Administrar productos </h2>
        <AddProductModal />
        <ProductTable />
      </section>
    </div>
  );
}
