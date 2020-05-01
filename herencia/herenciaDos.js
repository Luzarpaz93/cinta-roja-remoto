class Cine {
    constructor(pantallas, salas, butacas){
        this.pantallas = pantallas; 
        this.salas = salas; 
        this.butacas = butacas;
    }
    reproducir(Largometraje) {
        return `Se está reproduciendo ${Largometraje.titulo}`
    }
    reproducirP(Partido) {
        return `Se está reproduciento ${Partido.titulo}`
}
}
class Largometraje {
    constructor(titulo) {
        this.titulo = titulo;
    }
}
class Partido {
    constructor(titulo) {
        this.titulo = titulo;
    }
}
class Pelicula extends Largometraje {
    constructor(duracion, genero, titulo){
        super(titulo);
        this.duracion = duracion; 
        this.genero = genero;
    }
}

class Documental extends Largometraje {
    constructor(titulo, investigador, sponsor) {
        super(titulo);
        this.investigador = investigador;
        this.sponsor = sponsor; 
    }
}

class Clasico extends Partido {
    constructor(titulo, fecha, equipos1, equipos2) {
        super(titulo);
        this.fecha = fecha;
        this. equipos1 = equipos1;
        this.equipos2 = equipos2;
    }
}
const titanic = new Pelicula ('120 min', 'romantica', 'Titanic');
const theMinimalism = new Documental ('TheMinimalism', 'Un investigador', 'NatGeo')
const AmericavsChivas= new Clasico ('El Clasico', 'America', 'Chivas')
const cineChaplin = new Cine( 5, 5, 500)

const resultado = cineChaplin.reproducir(theMinimalism);
const repartido = cineChaplin.reproducirP(AmericavsChivas)
console.log(repartido)