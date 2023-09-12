import React from 'react'
import './Error.css'
import Boton from '../boton/Boton'
import { Link } from 'react-router-dom'

function Error(props) {
    const {error}=props
  return (
    <div className='error'>
       <div style={{backgroundColor:error.color}} className='error-contenedor'>
        <h2>{error.titulo}</h2>
        <p>{error.mensaje}</p>
        <Link to={`/${error.regresar}`}>
          <Boton nombre="Return" type="button"/>
        </Link>
       </div>
    </div>
  )
}

export default Error
