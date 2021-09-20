function adicionarFilme(){
    var contador = document.querySelectorAll("figure");
    var tituloFilme = document.querySelector("input#tituloFilme");
    var urlFilme = document.querySelector("input#urlFilme");
    var filme = [tituloFilme.value,urlFilme.value,contador];
    tituloFilme.value ="";
    urlFilme.value = "";

    listarFilmes(filme)
}

function listarFilmes(filme){

    figuras = filme[2];
    contadorID = parseInt(figuras.length);
    var galeria = document.querySelector("div#listaFilmes");
    var figure = document.createElement("figure");
    var legenda = document.createElement("figcaption");
    legenda.innerHTML="<h3>"+filme[0]+"</h3>";
    var image = document.createElement("img");
    var button = document.createElement("button");
    button.innerText="REMOVER";
    image.src=filme[1];


    /* Controle de ID's. Para evitar que mais de uma tag figure, tenham ID's repetidos
     Sempre a primeira imagem terá índice zero, a partir dessas sempre, será o índice da última mais um
     mesmo que alguma figura de índice menor seja excluída   */


    if(figuras.length>0){

        var ultimaFigura = figuras[figuras.length-1];
        var proximoID = parseInt(ultimaFigura.id)+1;
        button.id="btn"+ proximoID;
        image.id="figura"+proximoID;
        figure.id=proximoID;
        
    } else{
    
        button.id="btn"+contadorID;
        image.id="figura"+contadorID;
        figure.id=contadorID;

    }

    button.addEventListener("click",apagar,button); // atribuição de método para exclusão de figura
    figure.appendChild(image);
    figure.appendChild(legenda);
    figure.appendChild(button);
    galeria.appendChild(figure);

}

function apagar(a){
    button = a.path[1];  // esse método, extrai vários dados sobre o obejto recebido pelo parâmetro, neste caso, o ID do botão,
    var galeria = document.querySelector("div#listaFilmes");
    galeria.removeChild(button);
}