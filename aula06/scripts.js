
/*Plotagem dos dados na tabela*/

function criandoTabela(tabelaJogadores,jogadores){
    tabelaJogadores.innerHTML="";

    for(let i=0;i<jogadores.length;i++){
        var linha = document.createElement("tr");

        linha.className="jogador"

        for(let j=0;j<8;j++){

            var celula = document.createElement("td");

            switch(j){
                case(0):
                    var conteudo = '<figure class="perfil" ><img id=perfil'+i+' src='+jogadores[i].imgPNG+'><figcaption id = nome'+i+'>'+jogadores[i].nome+'</figcaption></figure>';
                    celula.innerHTML=conteudo;
                    break;
                case(1):
                    celula.innerHTML=jogadores[i].ouro;
                    celula.id="ouro"+i;
                    break;

                case(2):
                    celula.innerHTML=jogadores[i].prata;
                    celula.id="prata"+i;
                    break;

                case(3):
                    celula.innerHTML=jogadores[i].bronze;
                    celula.id="bronze"+i;
                    break;

                case(4):
                    celula.innerHTML=jogadores[i].total;
                    celula.id="total"+i;
                    break;

                case(5):
                    celula.innerHTML='<button name = somaOuro id = somaOuro'+i+' class='+i+'>+</button>&#129351;<button name = subOuro id=subOuro'+i+' class='+i+'>-</button>';
                    break;

                case(6):
                    celula.innerHTML='<button name= somaPrata id = somaPrata'+i+' class='+i+'>+</button>&#129352;<button name= subPrata id = subPrata'+i+' class='+i+'>-</button>';
                    break;

                case(7):
                    celula.innerHTML='<button name = somaBronze id = somaBronze'+i+' class='+i+'>+</button>&#129353;<button name = subBronze id = subBronze'+i+' class='+i+'>-</button>';
                    break;
            }

            linha.appendChild(celula);

        }
      // Configuração dos botões  
        tabelaJogadores.appendChild(linha);

        var btnSomaOuro = document.getElementById("somaOuro"+i)
        btnSomaOuro.addEventListener("click",somaOuro,btnSomaOuro);

        var btnSubOuro = document.getElementById("subOuro"+i);
        btnSubOuro.addEventListener("click",subOuro,btnSubOuro)

        var btnSomaPrata = document.getElementById("somaPrata"+i);
        btnSomaPrata.addEventListener("click",somaPrata,btnSomaPrata);

        var btnSubPrata = document.getElementById("subPrata"+i);
        btnSubPrata.addEventListener("click",subPrata,btnSubPrata);

        var btnSomaBronze = document.getElementById("somaBronze"+i);
        btnSomaBronze.addEventListener("click",somaBronze,btnSomaBronze);

        var btnSubBronze = document.getElementById("subBronze"+i);
        btnSubBronze.addEventListener("click",subBronze, btnSubBronze);

        

    }

}

// Funções dos botões
function somaOuro(btn){

    var id = btn.path[0].className;
    var medalha = document.getElementById("ouro"+id);
    medalha.innerText=parseInt(medalha.innerText)+1;

    criandoTabela(tabelaJogadores,leituraJogador()); // Investigar porque o Parâmetro "tabelaJogadores" é reconhecido mesmo sem vir da chamada da função
}

function subOuro(btn){

    var id = btn.path[0].className;
    var medalha = document.getElementById("ouro"+id);
    medalha.innerText=parseInt(medalha.innerText)-1;

    criandoTabela(tabelaJogadores,leituraJogador());

}

function  somaPrata(btn){

    var id = btn.path[0].className;
    var medalha = document.getElementById("prata"+id);
    medalha.innerText=parseInt(medalha.innerText)+1;

    criandoTabela(tabelaJogadores,leituraJogador());
}

function subPrata(btn){

    var id = btn.path[0].className;
    var medalha = document.getElementById("prata"+id);
    medalha.innerText=parseInt(medalha.innerText)-1;

    criandoTabela(tabelaJogadores,leituraJogador());

}

function somaBronze(btn){

    var id = btn.path[0].className;
    var medalha = document.getElementById("bronze"+id);
    medalha.innerText=parseInt(medalha.innerText)+1;

    criandoTabela(tabelaJogadores,leituraJogador());
}

function subBronze(btn){

    var id = btn.path[0].className;
    var medalha = document.getElementById("bronze"+id);
    medalha.innerText=parseInt(medalha.innerText)-1;

    criandoTabela(tabelaJogadores,leituraJogador());

}


//  Varredura de atualização dos dados da tabela

function leituraJogador(){
    var tabelaJogadores = document.querySelectorAll("tr.jogador");

    var listaJogadoresPlot = [];

    for(let i=0;i<tabelaJogadores.length;i++){

              
        var jogador = {
            nome: document.getElementById("nome"+i).innerText,
            imgPNG: document.getElementById("perfil"+i).src,
            ouro: parseInt(document.getElementById("ouro"+i).innerText),
            prata: parseInt(document.getElementById("prata"+i).innerText),
            bronze: parseInt(document.getElementById("bronze"+i).innerText),
            total: parseInt(document.getElementById("total"+i).innerText),
        }

        jogador.total= jogador.ouro+jogador.prata+jogador.bronze;

        listaJogadoresPlot.push(jogador);

        
    }
    
    return listaJogadoresPlot;
}


// lista dos Jogadores

function listaJogadores(){
    var jogadores = [
        {
            nome:"Paulo",
            imgPNG:"https://github.com/peas.png",
            ouro:0,
            prata:0,
            bronze:0,
            total:0,
        },
    
        {
            nome:"Rafaella",
            imgPNG:"https://github.com/rafaballerini.png",
            ouro:0,
            prata:0,
            bronze:0,
            total:0
        },

        {
            nome:"Maercio",
            imgPNG:"https://github.com/MaercioMamedes.png",
            ouro:0,
            prata:0,
            bronze:0,
            total:0,
        }
    ]
    return jogadores;
}


var tabelaJogadores = document.querySelector("tbody#tabelaJogadores") // área de plotagem da tabela dinâmica

criandoTabela(tabelaJogadores,listaJogadores()); // Chamada de rotina para plotar a tabela




