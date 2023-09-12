import React, { useEffect, useState } from 'react'
import './Lista.css'
import Boton from '../boton/Boton'
import { Link, useNavigate } from 'react-router-dom'
import ClienteService from '../../servicios/ClienteService';

function Lista({setError}) {

  const [cliente,setcliente]=useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    cargarLista()
  },[])

  const cargarLista=()=>{
    ClienteService.getAllCliente()
    .then(res=>setcliente(res.data))
    .catch(error=>console.log(error))
  }

  const eliminar=(e)=>{
    const id=e.target.id
    ClienteService.deleteCliente(id)
    .then(res=>{
      const msj={
        "titulo":"Eliminado",
        "mensaje":"Eliminado correctamente",
        "regresar":"lista",
        "color":"red"
      }
      setError(msj)
      navigate('/error')
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className='lista'>
      <div className='lista-contenedor'>
      <h2>Lista de clientes </h2>

        <table>
          <thead>
            <tr>
             <td>nombre</td>
             <td>telefono</td>
             <td>fecha</td>
             <td>peso</td>
             <td>estado</td>
             <td>nota</td>
             <td>Eliminar</td>
            </tr>
          </thead>
          <tbody>
            {
              cliente.map((data,index)=>{
                return  <tr key={index}>
                <td>{data.nombre}</td>
                <td>{data.telefono}</td>
                <td>{data.fecha}</td>
                <td>{data.peso}</td>
                <td>{data.estado}</td>
                <td>{data.nota}</td>
                <td className="eliminar" id={data.id} onClick={(e)=>eliminar(e)} >Eliminar</td>
               </tr>
              })
            }
          </tbody>
        </table>
        <div className='lista-boton'>
            <Link to='/recepcion'>
             <Boton nombre="Regresar" type="button"/>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Lista
