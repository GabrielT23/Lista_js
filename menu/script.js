let descricao = document.querySelector("#conteudo_descricao");
let ficha_tecnica = document.querySelector("#conteudo_ficha_tecnica");
let avaliacao = document.querySelector("#conteudo_avaliacao");
function abre_descricao(){
    descricao.style.display = 'block';
    ficha_tecnica.style.display = 'none';
    avaliacao.style.display = 'none';
    document.querySelector('#descricao').style.backgroundColor = 'white'
    document.querySelector('#ficha_tecnica').style.backgroundColor = '#f6f6f6'
    document.querySelector('#avaliacoes').style.backgroundColor = '#f6f6f6'
}
function abre_ficha_tecnica(){
    descricao.style.display = 'none';
    ficha_tecnica.style.display = 'block';
    avaliacao.style.display = 'none';
    document.querySelector('#descricao').style.backgroundColor = '#f6f6f6'
    document.querySelector('#ficha_tecnica').style.backgroundColor = 'white'
    document.querySelector('#avaliacoes').style.backgroundColor = '#f6f6f6'
}
function abre_avaliacao(){
    descricao.style.display = 'none';
    ficha_tecnica.style.display = 'none';
    avaliacao.style.display = 'block';
    document.querySelector('#descricao').style.backgroundColor = '#f6f6f6'
    document.querySelector('#ficha_tecnica').style.backgroundColor = '#f6f6f6'
    document.querySelector('#avaliacoes').style.backgroundColor = 'white'
}