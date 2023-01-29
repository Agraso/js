let juegos = ['Zelda','Mario','Metroid','Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
} );

let nueva= juegos.push('F-Zero')
console.log({nueva, juegos});

nueva = juegos.unshift('Fire Emblem')
console.log({nueva, juegos});

let borrado = juegos.pop()
console.log(borrado, juegos);

let pos = 1;

let juegoBorrado = juegos.splice(pos, 2)
console.log(juegoBorrado, juegos);

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});