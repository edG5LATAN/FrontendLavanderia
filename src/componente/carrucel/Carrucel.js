import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import './Carrucel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PublicidadService from '../../servicios/PublicidadServices.js'


function Carrucel() {

  const [publicidad,setpublicidad]=useState([])
  
  useEffect(() => {
  cargarDatos()
  }, [])

  const cargarDatos=()=>{
    PublicidadService.getAllPublicidad()
    .then(res=>{
     setpublicidad(res.data)
    }).catch(error=>console.log(error))
  }
  
  
  const settings = {
    lassName: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className='carrucel' >
      
      <Slider {...settings}>
       {
         publicidad.map((dat,index)=>{
          return <a key={index} className='carrucel-img' href={dat.enlace} target='blank' >
          <img src={dat.imagen}
           alt={dat.empresa}  />
         </a>
         })
        }
      </Slider>    
    </div>

  )
}

export default Carrucel
