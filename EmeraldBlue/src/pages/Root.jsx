import React from 'react'
import { Outlet } from 'react-router-dom'
import BarraDeNavegacion from '../components/barra_de_navegacion/BarraDeNavegacion'
import Cart from './Cart'

export default function Root() {
  return (
    <>
        <BarraDeNavegacion />
        <Cart placement='end'/>
        <Outlet />
    </>
  )
}
