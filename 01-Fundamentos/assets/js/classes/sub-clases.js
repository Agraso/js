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

class Heroe extends Persona {
    
    clan;

    constructor(nombre, codigo, frase){

        super(nombre, codigo, frase);  // Super es para llamar a la clase del padre o la clase extendida

        this.clan= 'Los Avengers'
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

// const spiderman = new Persona('Peter Parker','Spiderman','Un gran poder conlleva una gran resposabilidad')
// const ironman = new Persona('Tony Stark','Ironman','Yo soy ironman')
const spiderman = new Heroe('Peter Parker','Spiderman','Un gran poder conlleva una gran resposabilidad');

console.log(spiderman);
spiderman.quienSoy();