import React from "react";
import ProductsList from "../components/products/ProductsList";
import { useContext } from 'react'
import SideBarContext from '../context/SideBarContext'
export default function Vender() {
  const {sidebar} = useContext(SideBarContext)
  return (
    <div className={sidebar ? "ms-5" : "ms-1"} style={{ height: "90vh" }}>
      <section className="productos">
        <h2 className="text-center"> Administrar productos </h2>
        <ProductsList />
      </section>
    </div>
  );
}