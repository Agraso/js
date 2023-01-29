import { subirImg } from "./http-provide.js";


const body = document.body;
let inputFile , imgFoto

const crearinputFileHtml = () => {

    const html = `
        <h1 class="mt-5">Subir archivos</h1>
        <hr>
        
        <label>Seleccione una fotografia</label>
        <input type="file" accept="image/*" />

        <br>
        <img id="foto" class="img-thumbnail" src="">


    `;
    const div = document.createElement('div')
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

const eventos = () => {
    
    inputFile.addEventListener('change', (event) => {

        const file = event.target.files[0];
        // console.log(file);
        subirImg(file).then(url => imgFoto.src = url);

    });

}


export const init = () => {
    crearinputFileHtml();
    eventos();
}