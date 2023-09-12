import React from 'react'
import '../header/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      
        <Link to="/" className='header1'>
         <img src='./img/ecoclean.jpg'/>
        </Link>
      
      <div className='header2'>
        <ul>
        <Link to="/" className='li' >
          Servicios
        </Link>
        <Link to="/miniCentros" className='li'>Mini Centros</Link>
        <Link to="/informacion" className='li'>Informacion</Link>
        
        
        </ul>
      </div>
    </div>
  )
}

export default Header
