import React, { useEffect, useState } from 'react'
import './Cliente.css'
import Input from '../input/Input'
import Boton from '../boton/Boton'
import ClienteService from '../../servicios/ClienteService'


function Cliente() {

  const [cliente, setcliente] = useState([])
  const [data, setdata] = useState([])
  const [nombre, setnombre] = useState("")

  useEffect(() => {
    mostrar()
  }, [])

  const mostrar = () => {
    ClienteService.getAllCliente()
      .then(res => {
        setcliente(res.data)
      })
      .catch(error => console.log(error))
  }
  const buscar = (e) => {
    e.preventDefault()
    if (cliente.filter(res => res.nombre === nombre).length >= 1) {
      setdata(cliente.filter(res => res.nombre === nombre))
    }
    else {
      alert("no encontrado")
      setdata([])
      setnombre('')
    }
  }


  //  readOnly,type,placeholder,required,value,setvalue
  return (
    <div className='cliente'>
      <div className='cliente-contenedor'>
        <form onSubmit={buscar}>
          <h2>Buscar Cliente</h2>
          <Input type="text" placeholder="Ingrese su nombre" required value={nombre} setvalue={setnombre} />
          <div className='mostrar'>
            {
              data.map((dat, index) => {
                return <div key={index}>
                  <Input readOnly type="text"
                    placeholder="Estado"
                    value={dat.estado} />
                </div>
              })
            }
          </div>

          <Boton nombre="Buscar" type="submit" />
        </form>

      </div>
    </div>
  )
}

export default Cliente
