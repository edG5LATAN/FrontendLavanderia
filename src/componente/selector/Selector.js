import React, { useState } from 'react'
import './Selector.css'

function Selector({estado,setestado}) {


  const opciones=[
    "LAVADO","SECADO","RECEPCION","TERMINADO"
  ]

  const cambio=(e)=>{
    setestado(e.target.value)
  }
  return (
    <select value={estado} defaultValue='' onChange={cambio} className='selector'>
      <option value="Estado" hidden selected="none">Estado</option>
      {
        opciones.map((dat,index)=>{
          return<option key={index}>{dat}</option>
        })
      }
    </select>
  )
}

export default Selector
