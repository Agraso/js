let personaje = {
    nombre : 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.78
    },
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion:'Malibu, California' 
    },
    ultima_pelicula: 'End Game'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coordenadas', personaje.coords);
console.log('Latitud', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x] );

console.log('Ultima pelicula', personaje.ultima_pelicula);

// Mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log(entriesPares);


Object.freeze(personaje);

personaje.dinero = 1000000000000000;
personaje.casado = false
personaje.direccion.ubicacion = 'Costa Rica'
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const values = Object.values(personaje);
console.log(propiedades, values);