function cria_tela(){
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'produtos.json');
    ajax.send();
    ajax.onload = ()=>{
        let json = JSON.parse(ajax.response);
        console.log((((json[0])['imagens'])['variacoes'])[0]);
        monta_hmtl(json);
        
    }
}
function monta_hmtl(json){
    for(let i = 0; i < 20; i++){
        let body = document.querySelector("body");
        let sessao = document.createElement("section");
        sessao.setAttribute("class", "sessão");
        body.appendChild(sessao);
        let div_imagem = document.createElement("div");
        sessao.appendChild(div_imagem);
        let imagem = document.createElement("img");
        div_imagem.appendChild(imagem)
        imagem.setAttribute("src", ((json[i])['imagens'])['principal']);
        let div_informaçoes = document.createElement("div");
        div_informaçoes.setAttribute("class", "informações");
        sessao.appendChild(div_informaçoes);
        let div_titulo = document.createElement("div");
        div_titulo.setAttribute("class", "titulo");
        div_informaçoes.appendChild(div_titulo);
        let titulo = document.createElement("h1");
        div_titulo.appendChild(titulo);
        let texto_titulo = document.createTextNode((json[i]['produto']));
        titulo.appendChild(texto_titulo);
        /*aqui*/ 
        let div_conteudo = document.createElement("div");
        div_conteudo.setAttribute("class", "conteudo");
        div_informaçoes.appendChild(div_conteudo);
        let div_informaçoes_de_produto = document.createElement("div");
        div_conteudo.appendChild(div_informaçoes_de_produto);
        div_informaçoes_de_produto.setAttribute("class", "informações_de_produto");
        div_informaçoes_de_produto.innerHTML = `<h4>${(json[i])['vendedor']}</h4>` + `<h2>R$ ${((json[i])['preco']).toFixed(2)}</h2>` + `<h4>Em 10x de R$ ${(((json[i])['preco'])/10).toFixed(2)}</h4>`;
        /*conteudo*/
        let div_avaliaçao = document.createElement("div");
        div_avaliaçao.setAttribute("class", "avaliação");
        div_conteudo.appendChild(div_avaliaçao);
        let div_estrelas = document.createElement("div");
        div_estrelas.setAttribute("class", "estrelas");
        div_avaliaçao.appendChild(div_estrelas);
        for(let a = 0; a < (json[i])['estrelas']; a++){
            div_estrelas.innerHTML += "&#11088;"
        }
        let div_img_secundarias = document.createElement("div");
        div_img_secundarias.setAttribute("class", "img_secundarias");
        div_avaliaçao.appendChild(div_img_secundarias);
        for(let b = 0; b < (((json[i])['imagens'])['variacoes']).length; b++){
            let imagem_secundaria= document.createElement("img");
            div_img_secundarias.appendChild(imagem_secundaria);
            imagem_secundaria.setAttribute("src", (((json[i])['imagens'])['variacoes'])[b]);
        }
    }
        
}

