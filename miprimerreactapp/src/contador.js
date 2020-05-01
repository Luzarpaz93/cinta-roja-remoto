import React, { useState } from 'react';

function Contador(){

    const [number, setNumber] = useState(1);

    const onClickhandler = () => {
        console.log('Se le dio click');
        setNumber(number + 1);
        console.log(number);
    }

    const onClickhandlerRestar = () => {
        setNumber(number - 1);
    }

    return(
        <div>
            <h1>Soy el componente contador</h1>
            <p>{number}</p>
            <button 
                onClick={onClickhandlerRestar}> Restar -</button>
            <button     onClick={onClickhandler}> Sumar +</button>
                
                
        </div>
    );
}
export default Contador;