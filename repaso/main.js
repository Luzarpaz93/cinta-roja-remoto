console.log('Iniciando el archivo');
// Tipo de dato string
var string = "Hola batch remoto";
var stringDos = 'A';

// Tipo de dato number
var number = 49;
var numberDos = 43.23;


// Tipo de dato booleano
var booleano = true;
var booleanoDos = false;


// El if solo valida booleanos
// var edad = 20;
// if (edad >= 18) {
//     console.log('Entre al IF');
// } else {
//     console.log('Entre al else');
// }

// for(var i = 0; i<99; i++){
//     console.log('Se ejecuto una vez ' + i);
// }

// RETURN
// El RETURN devulve un valor especifico desde una función y rompe la ejecición.

// La definición de mi función
function multiplicacion(num1, num2) {
    let result = num1 * num2;
    return result
}

const mult = multiplicacion(10,5);
// console.log('El resultado es: '+ mult);

function isPasswordValid(password) {
    if (password !== 'passwordseguro') {
        return 'password incorrecto' // El return tambien es un break para al funcion
    }
    // Doy por echo que el passoword es correcto
    console.log('Se esta ejecutando la funcion');
    return 'login'
}

const result = isPasswordValid('passwordseguro');
//console.log(result);

// //PRIMER  EJERCICIO
// function division (num1, num2) {
//     let result = num1/num2;
//     return result
// }

// function isDivisionexacta (division) {
//     if (division !== number){
//         return 'correcto'
//     }
// }

// const divi = division(21,3)

// //console.log(El resultado es: +)

//SEGUNDO EJERCICIO
function compara(num1, num2) {
    if(num1 === num2){
       return("iguales")
    }else{
        if(num1 >num2)
          return("num 1 mayor ") 
    }   
    return("num 2 mayor")
}
//console.log(compara(10,2))

// //tercer ejercicio
// function Difaños (añoactual, añoequis){
// if (añoactual > añoequis) {return("La diferencia de años es:")}
// else {if (añoequis<añoactual)}