function criandoTabela(tabelaJogadores,jogadores){

    for(let i=0;i<jogadores.length;i++){
        var linha = document.createElement("tr");
        

        for(let j=0;j<8;j++){

            var celula = document.createElement("td");

            switch(j){
                case(0):
                    var conteudo = '<figure class="perfil"><img src='+jogadores[i].imgPNG+'><figcaption>'+jogadores[i].nome+'</figcaption></figure>';
                    celula.innerHTML=conteudo;
                    break;
                case(1):
                    celula.innerHTML="";
                    break;

                case(2):
                    celula.innerHTML="";
                    break;

                case(3):
                    celula.innerHTML="";
                    break;

                case(4):
                    celula.innerHTML="";
                    break;

                case(5):
                    celula.innerHTML='<button name= somaOuro'+i+' id='+i+'>+</button>&#129351;<button id=subOuro'+i+'>-</button>';
                    
                   
                    break;

                case(6):
                    celula.innerHTML='<button id=somaPrata'+i+'>+</button>&#129352;<button id=subPrata'+i+'>-</button>';
                    break;

                case(7):
                    celula.innerHTML='<button id=somaBronze'+i+'>+</button>&#129353;<button id=subronze'+i+'>-</button>';
                    break;
            }

            linha.appendChild(celula);

        }

        tabelaJogadores.appendChild(linha);

        var btn = document.getElementsByName("somaOuro"+i);
        btn[0].addEventListener("click",mostrar,i);
        
        


    }

}

function mostrar(btn){

    console.log(btn.path[0].id);

}
var tabelaJogadores = document.querySelector("tbody#tabelaJogadores");
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
    }
]

criandoTabela(tabelaJogadores,jogadores);
