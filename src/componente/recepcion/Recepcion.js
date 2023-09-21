import React, { useState } from 'react'
import './Recepcion.css'
import Input from '../input/Input'
import Boton from '../boton/Boton'
import Selector from '../selector/Selector'
import { Link, useNavigate } from 'react-router-dom'
import ClienteService from '../../servicios/ClienteService'
import { v4 as uuidv4} from 'uuid'


function Recepcion() {

  const [nombre,setnombre]=useState("")
  const [telefono,settelefono]=useState("")
  const [fecha,setfecha]=useState("")
  const [peso,setpeso]=useState("")
  const [nota,setnota]=useState("")
  const [estado,setestado]=useState("")
  const navigate= useNavigate();
 

  const cambio=(e)=>{
    e.preventDefault()
    const id=uuidv4()

    const cliente={
      "id":id,
      "nombre":nombre,
      "telefono":telefono,
      "fecha":fecha,
      "peso":peso,
      "estado":estado,
      "nota":nota
    }
    ClienteService.postCliente(cliente)
      .then(response=>{
        // console.log(response.data)
        navigate('/lista')})
      .catch(error=>console.log(error))

  }



  return (
    <div className='recepcion'>
      <div className='recepcion-contenedor'>
        <h2>Ingresar nuevo cliente</h2>
        <form onSubmit={cambio}>
        <Input type="text" placeholder="Ingrese un Nombre" required value={nombre} setvalue={setnombre}  />
        <Input type="text" placeholder="Ingrese un Telefono" required value={telefono} setvalue={settelefono}  />
        <Input type="date" placeholder="Ingrese un Fecha" required value={fecha} setvalue={setfecha}  />
        <Input type="text" placeholder="Ingrese un Peso" required value={peso} setvalue={setpeso}  />
        <Selector estado={estado} setestado={setestado}/>
        <Input type="text" placeholder="Nota" value={nota} setvalue={setnota}  />
        <div className='recepcion-botones'>
          <Boton nombre="Nuevo" type="submit"/>
          <Link to='/lista'>
            <Boton nombre="Lista" type="button"/>
          </Link>
        </div>
        </form>
        
      </div>
    </div>
  )
}

export default Recepcion
