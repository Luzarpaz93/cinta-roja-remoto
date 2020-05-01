// Super clase/clase padre
class Mascota {
    
    constructor (patas, nombre) {
        this.patas = patas;
        this.nombre = nombre;
        this.pelo = true; 
    
    }
    dormir(){
        return this.nombre + ' está durmiendo'   
     }
}

//Sub-clase/Clase-hijo
class Perro extends Mascota{
    constructor(raza, vacunado, color, nombre){
        super(4, nombre)
        this.raza = raza;
        this.vacunado = vacunado; 
        this.color = color; 
}

    ladrar(){
        return this.nombre + ' está ladrando'
    }
}

//Sub-clase/clase hijo
class Gato extends Mascota{
    constructor(edad, nombre){
        super(4, nombre)
        this.edad = edad;
        this.vidas = 7;
    }

    ronronear(){
        return this.nombre + ' está ronroneando';
    }
}

const snoopy = new Perro('Beagle', true, 'Blanco con Negro', 'Snoopy');
const Garfield = new Gato(18, 'Garfield')
console.log(snoopy.ladrar())
//console.log(Garfield.dormir())