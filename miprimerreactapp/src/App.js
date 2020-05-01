import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './saludo';
import Despedida from './despedida';
import Contador from './contador';
import Card from './card';
import Formulario from './Formulario'
import Axios from 'axios';

function App() {
  const palabra = "Sale chido bye";
  const saludo = "Hola desde el componente";

  const [authors, setAuthors] = useState([]);

  const objetos = [
    {id: 1, fruta:'Pera'},
    {id: 2, fruta:'Platano'},
    {id: 3, fruta:'Fresa'},
    {id: 4, fruta:'Durazon'},
    {id: 5, fruta:'Sandia'},
    {id: 6, fruta:'Limon'},
    {id: 7, fruta:'Mango'},
    {id: 8, fruta:'Zapote'},
    {id: 9, fruta:'Uva'},
    ];

  // const Cards = objetos.map((objFruta) => {
  //   return <Card nombreFruta={objFruta.fruta}/> 
  // });
  
 useEffect(() => {
    Axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/')
    .then((result) => {
      console.log(result.data);
      setAuthors(result.data)
    }).catch((err) => {
      console.log(err);
    });
}, []);

const render = () => {
  if (authors.lenght === 0){
    return <h1>Cargando..</h1>
  } else {
    const listCardAuthors = authors.map((author) => {
      return <Card nombre={author.name} />
    });
    return listCardAuthors
  }
}

  return (
    <div className="App row">
      {/* <Saludo saludo={saludo}/>
      <Despedida palabra={palabra}/>
      <Contador /> */}
      {render()}
    </div>
  );
}

export default App;
