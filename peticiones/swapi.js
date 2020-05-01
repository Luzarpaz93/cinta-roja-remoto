// mandar a llamar a la biblioteca request

const request = require('request');
// URL, callback es una función sin nombre
const  URL = 'https://swapi.co/api/people/20';
request.get(URL, (error, response, body) => {
    console.log(error);
    console.log(response.statusCode);
    const json = JSON.parse(body);
    console.log(json);
});

function getNameById(id){

}

const getNameByIdDos= (id) => {

}



getNameByIdDos(20);
getNameById(20);