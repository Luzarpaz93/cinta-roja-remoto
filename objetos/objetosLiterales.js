const ayudanteDeSanta = {
    ojos: 2,
    patas: 4,
    color: 'cafe',
    nombre: 'Ayudante de Santa',
    cola: true,
    ladrar: () => {
        return 'Wauu'
    },
    comer: function (comida) {
        if (comida === 'carne') {
            return 'yomi yomi';
        } else {
            return 'Wakala';
        }
    },
}

const snoopy = {
    ojos: 2,
    patas: 4,
    color: 'Blanco con Negro',
    nombre: 'Snoopy',
    cola: true,
    ladrar: () => {
        return 'Wauu'
    },
    comer: function (comida) {
        if (comida === 'carne') {
            return 'yomi yomi';
        } else {
            return 'Wakala';
        }
    },
}

// console.log(ayudanteDeSanta.comer('carne')); // Ayudante de Santa
// console.log(snoopy.comer('croquetas')); // Snoopy




const myPenguin = {

    nombre: 'Alfred',
    origen: 'Zig et Puce',
    creador: 'Alain Saint-Ogan',
    graznar: () => {
        return ' kaww kaww!!'
    },

puedeVolar (puedeVolar) {
    this.puedeVolar=false;
    }
}

console.log('Hola, soy un pinguino y mi nombres es '+ 
 (myPenguin.nombre + myPenguin.graznar()))

