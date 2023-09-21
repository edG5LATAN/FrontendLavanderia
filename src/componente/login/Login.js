import React, { useState } from 'react'
import './Login.css'
import Input from '../input/Input'
import Boton from '../boton/Boton.js'
import { useNavigate } from 'react-router-dom'

function Login({setError}) {

  const navigate= useNavigate()
  const [nombre,setnombre]=useState("")
  const [pass,setpass]=useState("")
 
  const datosInput=(e)=>{
    e.preventDefault()
    const data={
      nombre,
      pass
    }
    if(data.nombre==="recepcion@gmail.com" && data.pass==="1234"){
      navigate('/recepcion')
    }else if(data.nombre==="lavado@gmail.com" && data.pass==="1234"){
      navigate('/lavado')
    }else if(data.nombre==="administrador@gmail.com" && data.pass==="tecnicare"){
      navigate('/administrador')
    }
    else{
      const msj={
        "titulo":"Error Login",
        "mensaje":"password o Login invalido intente nuevamente",
        "regresar":"login",
        "color":"red"
      }
      setError(msj)
      navigate('/error')

    }
  }


  return (
    <div className='login'>
      <form className='login_contenedor' onSubmit={datosInput}>
         <label>Login</label>
         <Input required placeholder="Ingrese correo" type="email" value={nombre} setvalue={setnombre}/>
         <Input required placeholder="Ingrese password" type="password" value={pass} setvalue={setpass}/>
         <Boton nombre="Login" type="submit"/>
      </form>
    </div>
  )
}

export default Login
