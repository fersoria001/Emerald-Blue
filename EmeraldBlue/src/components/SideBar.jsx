import React from 'react'
import { useContext } from 'react'
import SideBarContext from '../context/SideBarContext'
import "../styles/sidebar.css"
export default function SideBar(props) {
  const {sidebar} = useContext(SideBarContext)

  return (
    <>
        <nav className={sidebar ? "sidebar" : "sidebar-inactive"}>
          <h5> Categorias </h5>
            <ul>
                <li>Mates</li>
                <li>Termos</li>
                <li>Bombillas</li>
            </ul>
        </nav>
    </>
  )
}
