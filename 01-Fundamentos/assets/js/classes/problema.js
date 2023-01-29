const fher = {
    nombre: 'Enrique',
    edad: 24,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 50,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// fher.imprimir();

function Persona(nombre, edad) {
    console.log(`Se ejecuto esta linea`);

    this.nombre = nombre;
    this.edad = edad;
    
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 30);
console.log(maria);

maria.imprimir();
melissa.imprimir();