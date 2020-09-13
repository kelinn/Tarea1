import React from 'react';
import logo from './logo.svg';
import './App.css';

// Importamos nuestro componente
import Hola from './Hola';
 
function App() {
  return (
    <div className="App">
         {/*Incluimos nuestro componente*/}
         <Hola/>
    </div>
  );
}

export default App;
