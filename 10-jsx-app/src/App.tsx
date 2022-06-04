import React from 'react';
import logo from './logo.svg';
import './App.css';
const name = 'Josh Perez'
const element = <h1>Hello, {name}</h1>

const formatName = (user: any) => {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'

}
const url = 'https://es.reactjs.org/docs/introducing-jsx.html'
const elementAhref = <a href={url}> Introducción a JSX</a>

function App() {
  return (
  <div className="jsx-ejercicio">
    {name}
    {element}
    <h1>
      Hello, {formatName(user)}
    </h1>
    {elementAhref}

  </div>
  );
}

export default App;
