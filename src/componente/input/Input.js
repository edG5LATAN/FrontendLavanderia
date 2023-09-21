import React from 'react'
import './Input.css'

function Input({readOnly,type,placeholder,required,value,setvalue}) {

  const cambio=(e)=>{
    const valor= e.target.value
     
       setvalue(valor)
  }

  return (
    <input onChange={cambio}
    readOnly={readOnly}
    value={value} required={required} type={type} 
    className='input' placeholder={placeholder} />
  )
}

export default Input
