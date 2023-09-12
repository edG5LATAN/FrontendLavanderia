import React from 'react'
import './Boton.css'

function Boton({ nombre,width,type}) {
  
  return (
    <button type={type} className='boton' style={{width:`${width}`}}>
      { nombre }
    </button>
  )
}

export default Boton
