import React from 'react'
import './Home2.css'
import PortadaBanco from '../portadaBanco/PortadaBanco'
import Card from '../card/Card'

function Home2() {

  const datos=[
    {
      "banco":"bac",
      "titulo":"Pago de tarejta de Credito",
      "img":"./img/bancos/bac/pagoTarjetaCredito.png",
      "datos":"Realiza el pago de tu tarjeta con el número de la tarjeta o presentándola fisicamente"
    },
    {
      "banco":"bac",
      "titulo":"Depósitos monetarios",
      "img":"./img/bancos/bac/depositosMonetarios.png",
      "datos":"Realiza depósitos en tu cuenta presentando la tarjeta de débito o con tu número de cuenta."
    },
    {
      "banco":"bac",
      "titulo":"Retiros en efectivo",
      "img":"./img/bancos/bac/retirosEfectivo.png",
      "datos":"Retira dinero utilizando tu clave o Pin del ATM. También puedes generar tu código único de retiro sin tarjeta desde la Banca Móvil."
    },
    {
      "banco":"bac",
      "titulo":"Recargas electrónicas",
      "img":"./img/bancos/bac/recargasElectronicas.png",
      "datos":"Realiza tus recargas electrónicas Claro y Tigo."
    },
    {
      "banco":"bac",
      "titulo":"Préstamos",
      "img":"./img/bancos/bac/prestamos.png",
      "datos":"Paga tus préstamos fácilmente."
    },
    {
      "banco":"bac",
      "titulo":"Pago de servicios",
      "img":"./img/bancos/bac/pagoServicios.png",
      "datos":"Puedes pagar tus servicios básicos como agua, luz o teléfono más rápido y seguro."
    },
    {
      "banco":"atlantida",
      "titulo":"Consultas",
      "img":"./img/bancos/atlantida/consultas.png",
      "datos":"Puedes pagar tus servicios básicos como agua, luz o teléfono más rápido y seguro."
    },
    {
      "banco":"atlantida",
      "titulo":"Depositos",
      "img":"./img/bancos/atlantida/depositos.png",
      "datos":"Puedes pagar tus servicios básicos como agua, luz o teléfono más rápido y seguro."
    },
    {
      "banco":"atlantida",
      "titulo":"Pagos",
      "img":"./img/bancos/atlantida/pagos.png",
      "datos":"Puedes pagar tus servicios básicos como agua, luz o teléfono más rápido y seguro."
    },
    {
      "banco":"atlantida",
      "titulo":"Pagos publicos",
      "img":"./img/bancos/atlantida/pagosPublicos.png",
      "datos":"Puedes pagar tus servicios básicos como agua, luz o teléfono más rápido y seguro."
    },
    {
      "banco":"atlantida",
      "titulo":"Telefonia",
      "img":"./img/bancos/atlantida/telefonia.png",
      "datos":"Puedes pagar tus servicios básicos como agua, luz o teléfono más rápido y seguro."
    },
    {
      "banco":"atlantida",
      "titulo":"Pago de servicios",
      "img":"./img/bancos/atlantida/pagoServicios.png",
      "datos":"Puedes pagar tus servicios básicos como agua, luz o teléfono más rápido y seguro."
    }
  ]



  return (
    <div className='home2'>
      <PortadaBanco portada="./img/bancos/bac/portada.jpg"/>
      <h2>Transacciones</h2>
      <div className='banco_bac'>
        {
          datos.filter(data=>data.banco==="bac").map((dat,index)=>{
            return<div key={index}>
              <Card data={dat}/>
            </div>
          })
        }
      </div>
      <PortadaBanco portada="./img/bancos/atlantida/portada.png"/>
      <h2>Transacciones</h2>
      <div className='banco_bac'>
        {
          datos.filter(data=>data.banco==="atlantida").map((dat,index)=>{
            return<div key={index}>
              <Card data={dat}/>
            </div>
          })
        }
      </div>
      <p className='parrafo'>Al visitar un Rapibac, usted puede tener acceso a los
         siguientes beneficios: Puede realizar sus trámites de manera 
         rápida y sin costo adicional Los Rapibac cuentan con horarios 
         amplios en los comercios afiliados para realizar cualquier 
         transacción mencionada en el apartado anterior Tiene alcance al 
        banco con una amplia red de comercios afiliados al programa.
        </p>
    </div>

  )
}

export default Home2
