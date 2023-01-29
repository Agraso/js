class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Hola a todos soy un metodo estatico');
    }


    nombre;
    codigo;
    frase;
    comida;

    constructor(nombre, codigo, frase){

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;

    }

    //Set y Get
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita (){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo} `);
    }

    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman = new Persona('Peter Parker','Spiderman','Un gran poder conlleva una gran resposabilidad')
const ironman = new Persona('Tony Stark','Ironman','Yo soy ironman')

console.log(ironman);

spiderman.quienSoy();
ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
console.log(spiderman.getComidaFavorita);
console.log(spiderman);

// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();


Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);