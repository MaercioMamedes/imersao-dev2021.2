
function sortearCarta(){
    var btnSortear = document.getElementById("btnSortear");
    btnSortear.disabled=true;

    cartaJogador = listaCartas[parseInt(Math.random()*4)]

    exibirCartaJogador()

   

     
}


function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.innerHTML="";
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.image})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto+=`<input type = 'radio' name='atributos' value='${atributo}' id='${atributo}'>
        <label for = '${atributo}'> ${atributo}: ${cartaJogador.atributos[atributo]}</label><br>`;
    }
   
    
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
    
   
/*
    var pos = listaCartas.indexOf(cartaSorteada);
    listaCartas.splice(pos,1);
    var cartaComputer = listaCartas[parseInt(Math.random()*3)];

    listaCartasSorteadas.push(cartaSorteada);
    listaCartasSorteadas.push(cartaComputer);
    iniciarJogo()

}*/

/*
function iniciarJogo(){

    var selecaoAtributos = document.querySelector("div#opcoes");
    var atributos = ["força","defesa","agilidade","energia"];

    for(let i=0; i<4;i++){

        selecaoAtributos.innerHTML+= ` <input type="radio" onclick="selecaoAtributo()" name="atributos" id="atributo${i}" value=${atributos[i]}>`;
        selecaoAtributos.innerHTML+=`<label for="atributo${i}">${atributos[i]}</label>`;

    }

    

    
}*/

/*
function selecaoAtributo(){

    var btnRadio = document.getElementsByName("atributos");
    var btnJogar = document.getElementById("btnJogar");
    

    for(let i=0; i<btnRadio.length; i++){

        if(btnRadio[i].checked){

            atributoChecked = btnRadio[i].value;
        }
    }

    //window.alert(`Você escolheu o atributo ${atributoChecked}`);

    btnJogar.disabled=false;
    
}


function jogar(){

    resultado.innerHTML+=
    
        `<figure>
            <img src="${listaCartasSorteadas[1].image}" alt="" srcset="">

            <figcaption>${listaCartasSorteadas[1].nome}
                <ul>
                    <li>Força: ${listaCartasSorteadas[1].atributos['força']}</li>
                    <li>Defesa: ${listaCartasSorteadas[1].atributos['defesa']}</li>
                    <li>Agilidade: ${listaCartasSorteadas[1].atributos['agilidade']}</li>
                    <li>Energia: ${listaCartasSorteadas[1].atributos['energia']}</li>
        </ul>
            </figcaption>
        </figure>`;

    var jogador = listaCartasSorteadas[0].atributos[atributoChecked];
    var computer = listaCartasSorteadas[1].atributos[atributoChecked];

    var situacao = document.getElementById("situacao");

    if(jogador>computer){

        situacao.innerText="VOCÊ GANHOU";
        situacao.style.backgroundColor="green";
    }

    else if (jogador<computer){

        situacao.innerText="VOCÊ PERDEU";
        situacao.style.backgroundColor="red";


    } else{

        situacao.innerText="EMPATOU";
        situacao.style.backgroundColor="yellow";
        situacao.style.color="black";
    }





}
*/
        
//cartas

var listaCartas = [
    {
        nome:"Goku",
        image:"https://i.pinimg.com/474x/05/2c/d2/052cd2b6b56a59ba40d3d932da1b3d67.jpg",
        atributos:{
            força:10000,
            defesa:8000,
            agilidade:9000,
            energia:9500,
        }
    },

    {
        nome:"Gohan",
        image:"https://i.pinimg.com/564x/44/52/57/4452570c284cc6970b1869ace5033777.jpg",
        atributos:{
            força:7000,
            defesa:5000,
            agilidade:8000,
            energia:9000, 
        }
    },
    
    
    {
        nome:"Kuririm",
        image:"https://i.pinimg.com/736x/ea/8a/93/ea8a93a4a76bab1cdf413692185820f5.jpg",
        atributos:{
            força:3000,
            defesa:2000,
            agilidade:2500,
            energia:3500,
        }
    },
    
    {
        nome:"Vegeta",
        image:"https://i.pinimg.com/originals/e4/ff/6e/e4ff6e8755bfd3139326d24718d64497.jpg",
        atributos:{
            força:10000,
            defesa:7500,
            agilidade:9000,
            energia:9000,
        }
    },
]

var listaCartasSorteadas = [

]


var atributoChecked =""

var cartaJogador = document.getElementById("carta-jogador");

var cartaMaquina = document.getElementById("carta-maquina");