import React from 'react';
import Characters from './components/Characters';
import './app.css'
import Logo from './img/logo.jpg';



const App = () => {

  return (
    <>
    <header  id="rolar" className="container-fluid py-3">
       <h1 className="navbar d-flex justify-content-center">
         <img src={Logo} alt="Logo da Marvel"/>
       </h1> 
    </header>
    <Characters/>
    </>
  );
}

export default App;
//'http://gateway.marvel.com/v1/public/characters?'
