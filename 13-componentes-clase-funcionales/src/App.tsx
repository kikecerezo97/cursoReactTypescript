import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ComponenteFuncional} from "./componentes/ComponenteFuncional";
import {ComponenteClase} from "./componentes/ComponenteClase";

function App() {
  return (
   <>
    <ComponenteFuncional name={"Frontend Academy"}/>
       <br/>
    <ComponenteClase name={"Frontend Academy"} />
   </>
  );
}

export default App;
