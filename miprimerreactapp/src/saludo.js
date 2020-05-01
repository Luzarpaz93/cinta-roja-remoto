import React from 'react';

function Saludo(props) {
    console.log(props)
    console.log(props.saludo)
    return (
        <h1> {props.saludo} </h1>
    )
}

export default Saludo;