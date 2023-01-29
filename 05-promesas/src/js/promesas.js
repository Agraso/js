const heroes ={
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras de arañas'
    },
}


export const buscarHeroe = (id) =>{

    const heroe = heroes[id];

    // const promesa = new Promise();
    return new Promise( (resolve, reject) => {

        if (heroe){
            
            setTimeout(() => resolve(heroe), 1000);

        } else{
            reject(`No existe un heroe con el ed ${id}`)
        }

    });

}


//Async forma
export const buscarHeroeAsync = async(id) =>{

    const heroe = heroes[id];

    // const promesa = new Promise();

        if (heroe){
            return heroe;
        } else{
            throw Error(`No existe un heroe con el ed ${id}`) //Si es inesperado
            // throw `No existe un heroe con el ed ${id}` Si no es inesperado
        }
}



const promesaLenta = new Promise( (resolve, reject) =>{
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise( (resolve, reject) =>{
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise( (resolve, reject) =>{
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});


export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}