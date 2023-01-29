

let a = 10;


if (a > 10) {
    console.log('A es mayor a 10');
}
else{
    console.log('A es menor o igual a 10');
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay()

console.log({dia});

if (dia === 0) {
    console.log('Domingo');
}else if (dia === 1) {
    console.log('Lunes');
    // if (dia === 1) {
    //     console.log('Lunes');
    // }else{
    //     console.log('No es lunes ni domingo');
    // }
}else if (dia === 2) {
    console.log('Martes');
}else{
    console.log('Hoy no es ni lunes, ni martes, ni domingo');
}


// Sin usar If Else o Switch, unicamente objetos
dia = 4;//0:domingo, 1: Lunes...

const diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];

const diaLetras2 = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado',
};

console.log(diaLetras[dia] || 'Dia no valido');