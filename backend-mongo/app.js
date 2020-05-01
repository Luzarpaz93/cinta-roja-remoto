const express = require('express');
const { Superheroe } = require('./models');

const app = express(); 

app.use(express.urlencoded({ extender: true}));
app.use(express.json());
 


app.get('/', (request, response) => {
    const respuesta = {
        mensaje: 'Hola mundo desde mondoDB'
    }
    response.send(respuesta);
});

app.post('/heroe', (req, res) => { 
    console.log(req.body);
    const heroe = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        superNovie: req.body.superNovie,
        identidad: req.body.identidad,
        debilidad: req.body.debilidad,
        superPoderes: req.body.superPoderes,
    };

    const newSuperHeroe= Superheroe(heroe);

    newSuperHeroe.save((err,superHeroe) => {
         if (err) res.status(400).send(err)
         else res.status(201).send(superHeroe);

    });

});

//todos los heroes
app.get('/heroes', (req, res) => {
    Superheroe.find().exec()
    .then((respuesta) => {
        res.send(respuesta);
    })
    .catch((err) => {
        res.status(400).send(err)
    })
});

//http:localhost:3000/heroe/64684684
//devolver un heroe por ID
app.get('/heroe/:id', (req, res) => {
    const idHeroe = req.params.id;  //paramsid se convierte en constante de IDHeroe
    Superheroe.findOne({ _id: idHeroe }).exec()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.status(400).send(err)
    });
});

//Actualizar



app.listen(3000, () => {
    console.log('Server on') 
 });
