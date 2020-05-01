//import de express
const express = require('express');

const app = express(); 
//configuración para aceptar body
app.use(express.urlencoded({ extender: true}));
app.use(express.json());

app.get('/', (request, response) => {
    const respuesta = {
        mensaje: 'Hola mundo desde express'
    }
    response.send(respuesta);
});

app.get('/users', (req, res) => {
    const users = [
        {id:1, name:'Iztel'},
        {id:2, name:'Ramon'}, 
        {id:3, name:'Cesar'},
];
    res.send(users);

});

app.get('/users/:idUser', (req,res) => {
    console.log(req.params); 
    if (req.params.idUser === '2'){
        const respuesta = { 
        id:2,
        name: 'Ramon'
    };
    res.send(respuesta); 
} else {
    res.status(404).send({ message: 'No encontrar'})
}
});

//Querys --> http://localhost:3000/users?name=ramon
app.get('/search/user', (req, res) => {
    console.log(req.query);
    if (req.query.name === 'itzel'){
    const respuesta = {
        id: 1,
        nombre: 'itzel'
    };
    res.send(respuesta);
} else {
    res.status(404).send({mensaje: 'No encontrado'}
    )
}
});

app.post('/crear/user', (req, res) =>{
    console.log(req.body); 
    const respuesta = {
        id: 1,
        nombre: req.body.name,
        edad: req.body.age,
        color: req.body.color,
    };
    res.send(respuesta);
});

//app.listen(PORT,CALLBACK);
//siempre va al final
app.listen(3001, () => {
   console.log('Server on') 
});




//Ejercicio uno
app.get('/api/', (req,res) => {
    const respuesta = {
        mensaje: 'Hola mundo'
    }
    res.send(respuesta)
});



//Ejercicio tres
//http://localhost:3000/api/suma?num1=5&num2=10 ---->> {suma=15}
app.get('/api/suma/', (req,res) => {
    console.log(req.query);
    const num1 = req.query.num1;
    const num2 =req.query.num2;
    const suma = parseInt(num1) + parseInt(num2); // parseInt de strings a enteros
    console.log(suma);
    res.status(200).send ({ suma : suma })
});

//ejercicio tres
app.get('/api/:usuario/', (req,res) => {
    const respuesta = { 
        name: 'Edwin',
    } 
    res.status(200).send(respuesta)
});


//ejercicio 4 hacer**
app.get('/api/:swapi/', (req,res) => {
    const people = req.params;
    request.get(`https://swapi.co/api/people/${people}/`, (err, res, body) =>  {
        const swapi = JSON.parse(body);
        resp.send({'personaje': swapi});
    });
}); 