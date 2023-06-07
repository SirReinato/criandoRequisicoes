import { importacoes } from "./converterApi.js";

const vitrine = document.querySelector('#vitrine');

async function porLivroNaTela() {
    const livrosQueJaTem = await importacoes.apiConvertida();

    livrosQueJaTem.forEach(livro => {
        vitrine.innerHTML += `
        <div class="livraria">
            <figure>
                <img src="${livro.capa}" alt="capa do livro ${livro.nome}">
                <h2 class="titulo">${livro.nome}</h2>
                <figcaption>${livro.autor}</figcaption>
            </figure>
            
        </div>
        `;
    });
}
porLivroNaTela()