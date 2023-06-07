let livros = [];

// converter api
async function apiConvertida() {
    const preparandoApi = await fetch('http://localhost:3000/livros');
    livros = await preparandoApi.json()
    return livros
}

// criar livro
async function addLivro(nome, capa, autor){
    const conexao = await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            capa: capa,
            autor: autor
        })
    })
    const conexaoPronta = await conexao.json();
    return conexaoPronta
}

export const importacoes = {apiConvertida, addLivro} 