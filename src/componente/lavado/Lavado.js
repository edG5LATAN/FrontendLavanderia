import React, { useEffect, useState } from 'react'
import './Lavado.css'
import Boton from '../boton/Boton'
import Input from '../input/Input'
import Selector from '../selector/Selector'
import ClienteService from '../../servicios/ClienteService'
import { useNavigate } from 'react-router-dom'

function Lavado({setError}) {

  const [cliente,setcliente]=useState([])
  const [nombre,setnombre]=useState("")
  const [telefono,settelefono]=useState("")
  const [fecha,setfecha]=useState("")
  const [peso,setpeso]=useState("")
  const [nota,setnota]=useState("")
  const [estado,setestado]=useState("")
  const [id,setid]=useState("")
  const navigate=useNavigate()
  const [info,setinfo]=useState(true)

 useEffect(() => {
   cargarCliente() 
 },[])

  const cambio=(e)=>{
    e.preventDefault()
    if(id){
      const data={
        id,
        nombre,
        telefono,
        fecha,
        peso,
        estado,
        nota
      }
      ClienteService.updateCliente(id,data)
       .then(res=>{
        const msj={
          "titulo":"Editado",
          "mensaje":"Editado correctamente",
          "regresar":"lavado",
          "color":"green"
        }
        setError(msj)
        navigate('/error')
       })
       .catch(error=>console.log(error))
      
    }else{
      const msj={
        "titulo":"Error Editar",
        "mensaje":"seleccione un cliente valido",
        "regresar":"lavado",
        "color":"red"
      }
      setError(msj)
      navigate('/error')
    }
    limpiar()
  }
const limpiar=()=>{
  
  setid("")
  setnombre("")
  settelefono("")
  setfecha("")
  setpeso("")
  setestado("")
  setnota("")
}
  const cargarCliente=()=>{
    ClienteService.getAllCliente()
    .then(res=>{
      setcliente(res.data)
    })
    .catch(error=>console.log(error))
  }

  const editar=(e)=>{
    const id=e.target.id
    ClienteService.getClienteById(id)
    .then(res=>{
      setid(res.data.id)
      setnombre(res.data.nombre)
      settelefono(res.data.telefono)
      setfecha(res.data.fecha)
      setpeso(res.data.peso)
      setestado(res.data.estado)
      setnota(res.data.nota)
    })
    .catch(error=>console.log(error))
  }
  

  return (
    <div className='lavado'>
      <div className='lavado-contenedor'>
        <div className='recepcion-contenedor'>
        <h2>Editar cliente</h2>
        <form onSubmit={cambio}>
        <Input readOnly type="text" placeholder="Ingrese un Nombre"  value={nombre} setvalue={setnombre}  />
        <Input readOnly type="text" placeholder="Ingrese un Telefono"  value={telefono} setvalue={settelefono}  />
        <Input readOnly type="date" placeholder="Ingrese un Fecha"  value={fecha} setvalue={setfecha}  />
        <Input readOnly type="text" placeholder="Ingrese un Peso"  value={peso} setvalue={setpeso}  />
        <Selector estado={estado} setestado={setestado}/>
        <Input type="text" placeholder="Nota"  value={nota} setvalue={setnota}  />
        <div className='recepcion-botones'>
          <Boton nombre="Editar" type="submit"/>
        </div>
        </form>
        
      </div>
      </div>
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
              cliente.map((dat,index)=>{
                return<tr key={index}>
                <td>{dat.nombre}</td>
                <td>{dat.telefono}</td>
                <td>{dat.fecha}</td>
                <td>{dat.peso}</td>
                <td>{dat.estado}</td>
                <td>{dat.nota}</td>
                <td className="editar" id={dat.id} onClick={(e)=>editar(e)}>
                  Editar
                </td>
   
               </tr>
              })
            }
          </tbody>
        </table>
       
      </div>
    </div>
  )
}

export default Lavado
