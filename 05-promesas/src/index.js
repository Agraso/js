import'./styles.css';
import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroesIfAwait } from './js/await';
// // import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
// import { buscarHeroe, buscarHeroeAsync } from './js/promesas';


// // promesaLenta.then(console.log);
// // promesaMedia.then(console.log);
// // promesaRapida.then(console.log);

// // Promise.race([promesaLenta,promesaMedia,promesaRapida])
// //        .then(mensaje => console.log(mensaje))
// //        .catch(console.warn)

// buscarHeroe('capi2')
//         .then(console.log)
//         .catch(console.warn);

// buscarHeroeAsync('iro2n')
//         .then(console.log)
//         .catch(console.warn)



// console.time('await');


// obtenerHeroesArr().then(heroes => {
//     console.table(heroes);

//     console.timeEnd('await');
// });


// console.time('await');


// obtenerHeroeAwait('capi2')
//     .then(heroe => {
//         console.log(heroe);

//         console.timeEnd('await');
// });

// heroesCiclo()

heroesIfAwait('iron');