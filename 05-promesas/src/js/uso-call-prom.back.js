import'./styles.css';
// import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';


const heroeId1 = 'capi';
const heroeId2 = 'spider';
const heroeId3 = 'iron';


//Callback
// buscarHeroe(heroeId1, ( err, heroe1 ) => {

//     if (err){ return console.error(err);}

//     buscarHeroe(heroeId2, (err, heroe2) =>{

//         if (err){ return console.error(err);}

//         buscarHeroe(heroeId3, (err, heroe3) =>{

//             if (err){ return console.error(err);}
    
//             console.log(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} y a ${heroe3.nombre} a la misión`);
//         });
//     });
// });



//Promesas
// buscarHeroe(heroeId1).then(heroe1 =>{
//     // console.log(`Enviando a ${heroe.nombre} a la misión`);
//     buscarHeroe(heroeId2).then(heroe2 =>{
//         buscarHeroe(heroeId3).then(heroe3 =>{
//             console.log(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} y a ${heroe3.nombre} a la misión`);
//         });
//     });
// });


Promise.all([ buscarHeroe (heroeId1), buscarHeroe(heroeId2), buscarHeroe(heroeId3)])
.then(([heroe1, heroe2, heroe3]) =>{

    console.log(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} y a ${heroe3.nombre} a la misión`);

}).catch(err =>{
    alert(err)
}).finally( () =>{
    console.log('Se termino el promise.all');
})

console.log('Fin del programa');
