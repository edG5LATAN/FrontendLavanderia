import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componente/footer/Footer';
import Header from './componente/header/Header';
import Home from './componente/home/Home';
import Home2 from './componente/home2/Home2';
import Home3 from './componente/home3/Home3';
import Login from './componente/login/Login';
import Recepcion from './componente/recepcion/Recepcion';
import Lista from './componente/lista/Lista';
import Cliente from './componente/cliente/Cliente';
import Lavado from './componente/lavado/Lavado'
import Error from './componente/error/Error';
import { useEffect, useState } from 'react';
import Administrador from './componente/administrador/Administrador';
import Carrucel from './componente/carrucel/Carrucel';
import PublicidadServices from './servicios/PublicidadServices';

function App() {

  const [mensajeError,setMensajeError]=useState([])
  const [publicidad,setpublicidad]=useState([])
  const [actualizar,setactualizar]=useState(true);

  useEffect(() => {
  cargarDatos()
  }, [actualizar])

  const cargarDatos=()=>{
    PublicidadServices.getAllPublicidad()
    .then(res=>{
     setpublicidad(res.data)
    }).catch(error=>console.log(error))
  }

  const actualizarPublicidad=()=>{
     setactualizar(!actualizar)
  }


  return (
    <div className="App">
     <BrowserRouter>
      <Header />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/administrador' element={<Administrador setError={setMensajeError} actualizar={()=>actualizarPublicidad()} />}/>
        <Route path='/miniCentros' element={ <Home2/>}  />
        <Route path='/informacion' element={ <Home3/>}  />
        <Route path='/login' element={ <Login setError={setMensajeError}/>}/>
        <Route path='/recepcion' element={<Recepcion />}/>
        <Route path='/lista' element={ <Lista setError={setMensajeError}/>}/>
        <Route path='/cliente' element={<Cliente setError={setMensajeError} />}/>
        <Route path='/lavado' element={<Lavado setError={setMensajeError}/>}/>
        <Route path='/error' element={<Error error={mensajeError} />} />
       </Routes>
       <Carrucel publicidad={publicidad} />
       <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
