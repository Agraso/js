
function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return 1,2;

    console.log('Soy un codigo que está después del return');
}

const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}




const retornoDeSaludar = saludar('Enrique', 23, false, 'Panama');
console.log(retornoDeSaludar);
// saludar2('Enrique');
// saludarFlecha('Flecha');


function sumar(a, b) {
    return a + b
}

// const sumar2 = (a, b) =>{
//     return a + b;
// }
const sumar2 = (a, b) => a + b;


function getAleatorio(){
    return Math.random();
}

// funcion de flecha
const getAleatorio2 = () => Math.random();
// --------------------------

console.log(sumar(1,2));
console.log(sumar2(2,2));

console.log(getAleatorio())
console.log(getAleatorio2());