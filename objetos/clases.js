//Molde para crear objetos perros
class Perro {
    //metodo constructur, se ejectur automaticamente 
    //y sirve para inicializar los valores y el constructor inicaliza solo atributos. 
    constructor(name,color){
        console.log('Se ejecutó el método constructor');
        

        //this.atributo = valor
        this.ojos = 2;
        this.cola = true; 
        this.patas = 4;
        this.nombre = name;
        this.color = color;
    }

    ladrar(){
        return 'wau wau';
    }
    
    comer(alimento){
        if (alimento === 'croquetas'){
            return 'wakala'
        } else {
            return 'yomi yomi'
        }
    }
    // this
    truco(){
        return this.nombre + 'dio una vuelta'
    }

        // Getters/Setters
    getNombre() {
        return this.nombre
    }

    setColor(nuevoColor) {
        //Renombra el color con el nuevoColor
        //Cambia el valor del atributo
        this.color = nuevoColor;
    }

    crearRaza(raza){
        this.raza = raza;
    }
  
}

// Instancia/Objeto
const snoopy = new Perro('Snoopy', 'Negro y Blanco');
const ayudanteDeSanta = new Perro('Ayudante de Santa', 'cafe');
const ScoobyDoo= new Perro('Scooby Doo', 'cafe');

console.log(snoopy);
snoopy.crearRaza('Beagle');
console.log(snoopy);

console.log(ayudanteDeSanta);
console.log(ScoobyDoo);

