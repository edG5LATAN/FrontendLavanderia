import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div>
        <img ref="/img/ecoclean.ong" alt='imagen logo'/>
      </div>
      <div>
        <ul>
         <li>Servicion</li>
         <li>MiniCentro</li>
         <li>Informacion</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
