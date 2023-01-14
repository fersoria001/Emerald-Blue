import React from 'react'
import { UserForm } from '../../components/users/UserForm'

export default function Registrarse() {
  return (
    <div className='contenedor-ing'>
    <div className='center-rectangle' style={{height:"70vh"}}>
    <div className='center-square' style={{height:"70vh", width:"70vh"}}>
    <UserForm />
    </div>
    </div>
    </div>
  )
}
