class Singleton {

    static instancia;
    nombre = '';

    constructor(nombre = '') {

        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        return this;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman')
const instancia3 = new Singleton('Black Panther')

console.log(`Nombre en la intancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la intancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la intancia3 es: ${instancia3.nombre}`);