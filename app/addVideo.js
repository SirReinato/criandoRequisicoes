import { importacoes } from "./converterApi.js";
const form = document.querySelector("#form")

async function addVideos(event) {
    event.preventDefault()
    const nome = document.querySelector('#nome').value;
    const capa = document.querySelector('#capa').value;
    const autor = document.querySelector('#autor').value;

    await importacoes.addLivro(nome, capa, autor);
    alert('LIVRO ADICIONADO');
}

form.addEventListener('submit', event => addVideos(event));