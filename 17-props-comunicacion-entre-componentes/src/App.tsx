import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ComponenteHijo} from "./componentes/ComponenteHijo";

function App() {
  return (
   <>
       <ComponenteHijo
           name={'Enrique'}
           apellido1={'González'}
           edad={25}
            clickReturnName={(nameComplete )=>{
                console.log(nameComplete);
            }}
       />


   </>
  );
}

export default App;
