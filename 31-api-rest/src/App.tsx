import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/home/Home';
import { VerUsuario } from './views/VerUsuario/VerUsuario';
import { EditarUsuario } from './views/EditarUsuario/EditarUsuario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Home/> />
        <Route path='/usuario/:id' element={<VerUsuario/>}/>
        <Route path='/editar/:id' element={<EditarUsuario/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
