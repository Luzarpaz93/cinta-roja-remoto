
class Penguin {
    constructor (name,origen,creador){
        this.nombre = name;
        this.origin = origen;
        this.creator = creador; 
    } 
    bienvenido() {
        return `Hola, soy un pinguino y mi nombre es ${this.nombre} `
    }

    crearpuedoVolar(){
        this.puedoVolar = true
    }

    graznar(){
        return `kaww kaww!!`
    }

    saludar() {
        console.log(this.bienvenido())
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }

    volar(crearpuedoVolar){
        if (this.puedovolar = true) {return `puedo volar!`
    } else {return `No puedo volar`}

}
}

const MyPenguin = new Penguin (
    'Alffred', 
    'Zig et Pace', 
    'Alain Saint-Ogen'
    )

//console.log(MyPenguin)
//MyPenguin.crearpuedoVolar()
//console.log(MyPenguin)

