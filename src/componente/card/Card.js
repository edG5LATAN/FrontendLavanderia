import React from 'react'
import './Card.css'


function Card(props) {
  const {data}=props
  return (
    <div className='card'>
        <h3>{data.titulo}</h3>
      <img src={`${data.img}`} alt='imagen bac' className='card-img'/>
       <p>
        {data.datos}
       </p>
    </div>
  )
}

export default Card
