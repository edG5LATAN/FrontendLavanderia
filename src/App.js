import './App.css';
import Footer from './componentes/footer/Footer.js'
import Header from './componentes/header/Header.js'
import {BrowserRouter , Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter >
     <Header/>
       <Routes>
        <Route />
       </Routes>
       <Footer/>
     </BrowserRouter >
    </div>
  );
}

export default App;
