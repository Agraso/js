const elMayor = (a,b) => (a > b) ? a : b;

const menbresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares'

console.log(elMayor(22,15));
console.log(menbresia(true));

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (() => 'Nick Fury')(),
    elMayor(10,15),
];
console.log( amigosArr);

const nota = 95.2;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F'

console.log({nota, grado})