import React from 'react'
import '../styles/home.css'
import flecha from '../assets/Vector.png';
import regalos from '../assets/regalos.jpg';
import { useContext } from 'react'
import SideBarContext from '../context/SideBarContext'
export default function Home() {
  const {sidebar} = useContext(SideBarContext)
  return (
    <>
    <section className='destacados' style={{height: "90vh"}}>
    <div className={sidebar ? "banner ms-5" : "banner ms-1"}>
    <img src={regalos} className="d-block w-100" alt="..." />
    </div>
    <div className="text-center">
          <img className="img-fluid" src={flecha} alt="flecha" />
          Ver todo
        </div>
    </section>
    </>
  )
}
