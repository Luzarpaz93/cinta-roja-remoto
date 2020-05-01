const miPrimeraListadeSaludos= ['Hola', 'Que onda', 'Saludos'];

const miSegundaLista = ['String', 40, true, 20, false, "otro string"]


//console.log(miPrimeraLista[2]): 
//console.log(miSegundaLista[1]);

const objetoUno = { id: 1, nombre: 'Maria', edad:22 };
const objetoDos = { id: 2, nombre: 'Jorge', edad:33 };
const objetoTres = { id: 3, nombre: 'Luis', edad:15 };


const terceraLista = {objetoUno, objetoDos, objetoTres};

//console.log(terceraLista[1].nombre); //--> Jorege

// for(let i=0; 1<terceraLista.lenght; i++){
//     console.log('----- Iteración-----')
//     console.log(terceraLista[i].nombre)
// };

// for(let i = 0; i<terceraLista.lenght; i++){
//     const obt = terceraLista[i];
//     if (obj.edad > 17) {
//         console.log(obj.nombre);
//     }
// }

const listaMayoresDeEdad = [];
for(let i = 0; i<terceraLista.lenght; i++){
    const obj = terceraLista[i];
    if (obj.edad > 17) {
        listaMayoresDeEdad.push(obj)
    }
}

console.log(listaMayoresDeEdad);
console.log(terceraLista);