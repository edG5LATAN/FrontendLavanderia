import React from 'react'
import './Home3.css'
import '../home/Home'



function Home3() {
  return (
    <div className='home3'>
      <div className='contenedor-home3'>
      <div className='home-1' >
          <img className='home-1-img' src="./img/lavanderia.png" alt="imagen lavanderua" />
          <div className='iconos-redes'>
          <a href='https://www.facebook.com/laecocleanhn' target='blanck'> 
              <img className='iconos-redes-img' src="./img/facebook.png" alt="facebook" />
           </a>
           <a href='https://www.instagram.com/ecocleanlavanderiaoficial/' target='blank'>
            <img className='iconos-redes-img' src="./img/instagran.png" alt="instagran" />
           </a>
          </div>
        </div>
        <div className='home3-info'>
          <h3>Eco clean</h3>
          <p>
            Contamos con el servicio Lavanderia
             general lavado planchada secado
              y con entrega a domicilio.
          </p>
          <h3>Servicio de Banco</h3>
          <p>
            Servicio de Rapibanco para Bac Credomatic, Banco Atlantida, 
            Banco los Trabajadores con opciondes de pagos de 
            servicios publicos de Energia Electrica SANNA pago de 
            tarjetas de creditos despositos y retiros automaticos.
          </p>
          <h3>Tigo Money</h3>
          <p>
            Puedes hacer tu pagos de planes telefonicos envios 
            de Tigo money y retiros, Money grand retiros.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Home3
