import React from 'react'
import { Link } from 'react-router-dom'

export default function CreadoConExito() {
  return (
    <div className='contenedor-ing'>
    <div className='center-rectangle'>
    <div className='center-square'>
    <div className='log-in'>
    <h5> Hemos creado tu usario con exito!</h5>
    <p> Se ha enviado un correo a tu dirección de correo electrónico para que confirmes el registro
    y puedas llevarte tus productos.</p>
    <p> Haz click <Link to={"/ingresar"} className="text-decoration-none"> aqui </Link> para ingresar.</p>
    
    </div>
    </div>
    </div>
    </div>
  )
}
