import React from 'react'
import './Input.css'

function Input({readOnly,type,placeholder,required,value,setvalue}) {

  const cambio=(e)=>{
     setvalue(e.target.value)
  }

  return (
    <input onChange={cambio}
    readOnly={readOnly}
    value={value} required={required} type={type} 
    className='input' placeholder={placeholder} />
  )
}

export default Input
