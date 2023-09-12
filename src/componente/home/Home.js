import React from 'react'
import '../home/Home.css'
import Boton from '../boton/Boton'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='home-card'>
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
        <div className='home-botones'>
          <Link to="/cliente">
            <Boton nombre="Cliente" />
          </Link>
          <Link to='/login'>          
            <Boton nombre="Lavanderia"/>
          </Link>
          <Link to='/login'>          
            <Boton nombre="Administrador"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
