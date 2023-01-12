import React from "react";
import AddProductModal from "../components/products/AddProductModal";
import ProductTable from "../components/products/ProductTable";
export default function Vender() {
  return (
    <div style={{ height: "90vh" }}>
      <section className="productos">
        <h2 className="text-center"> Administrar productos </h2>
        <AddProductModal />
        <ProductTable />
      </section>
    </div>
  );
}
