import React, { useEffect, useState } from 'react'
import './Administrador.css'
import Input from '../input/Input'
import Boton from '../boton/Boton'
import PublicidadService from '../../servicios/PublicidadServices.js'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4} from 'uuid'



function Administrador({setError}) {

    const [empresa,setempresa]=useState("")
    const [imagen,setimagen]=useState("")
    const [enlace,setenlace]=useState("")
    const navigate=useNavigate()

    const [publicidad,setpublicidad]=useState([])
  
    useEffect(() => {
    cargarDatos()
    },[])
  
    const cargarDatos=()=>{
      PublicidadService.getAllPublicidad()
      .then(res=>{
       setpublicidad(res.data)
      }).catch(error=>console.log(error))
    }

  const cambio=(e)=>{
    e.preventDefault()
    const id=uuidv4()
    let data={
      "id":id,
      "empresa":empresa,
      "imagen":imagen,
      "enlace":enlace
    }
    PublicidadService.postPublicidad(data)
    .then(res=>{
       cargarDatos()
    }).catch(error=>console.log(error))

  }


const eliminar=(e)=>{
  let id=e.target.id
  PublicidadService.deletePublicidad(id)
  .then(res=>{
    console.log(res)
    navigate('/error')
    cargarDatos()
  }).catch(error=>console.log(error))
}

  return (
    <div className='administrador'>
      <div className='contenedor-administrador'>  

      <h2>Administracion de Comerciales</h2>

        <form onSubmit={cambio}>
         <Input type="text" placeholder="Ingrese un Nombre" required value={empresa} setvalue={setempresa}  />
         <Input type="text" placeholder="link del video" required value={imagen} setvalue={setimagen}  />
         <Input type="text" placeholder="Ingrese informacion" required value={enlace} setvalue={setenlace}  />  
         <Boton nombre="Nuevo" type="submit"/>
        </form>
        <div>
          <table>
           <thead>
						<tr>
						<td>Empresa</td>
						<td>imagen</td>
						<td>enlace</td>
						<td>eliminar</td>
						</tr>
					 </thead>
					 <tbody>
						{
              publicidad.map((dat,index)=>{
                return<tr key={index}>
                <td>{dat.empresa}</td>
                <td>{dat.imagen}</td>
                <td>{dat.enlace}</td>
                <td className='eliminar' id={dat.id} onClick={(e)=>eliminar(e)} >eliminar</td>
                </tr>
              })
            }
					 </tbody>
          </table>
        </div>
       
      </div>
			{/* https://drive.google.com/file/d/1CclgNg9UegDAHJ0hahyuT_ILwHcdqQxP/view?usp=drive_link */}
    </div>
  )
}

export default Administrador
