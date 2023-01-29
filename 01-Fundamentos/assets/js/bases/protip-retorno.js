function crearPersona(nombre, apellido) {
    return {nombre, apellido}
}

// Funcion de flecha
const crearPersona2 = (nombre, apellido) => ({nombre, apellido})


const persona = crearPersona('Enrique', 'Agraso');
console.log(persona);
const persona2 = crearPersona2('Jose', 'Carballeira');
console.log(persona2);


function imprimeArgumentos() {
    console.log(arguments);
}

// Funcion de flecha
const imprimeArgumentos2 = (edad, ...args) =>{
    // console.log({edad, args});
    return args;
}

const [vivo, casado, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Enrique', 'Hola');

console.log({vivo, casado, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Enrique', 'Agraso');
console.log({nuevoApellido});

let tony = {
    nombre : 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//     console.log('Nombre', personaje.nombre);
//     console.log('Codename', personaje.codeName);
//     console.log('Vivo', personaje.vivo);
//     console.log('Edad', personaje.edad);
//     console.log('Trajes', personaje.trajes);
// }



const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {

    // edad = edad || 0;

    console.log({nombre});
    console.log({codeName}); 
    console.log({vivo}); 
    console.log({edad}); 
    console.log({trajes});
    
}


imprimePropiedades(tony);