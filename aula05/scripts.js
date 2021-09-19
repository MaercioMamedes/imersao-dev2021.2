function adicionarFilme(){
    var contador = document.querySelectorAll("figure").length;
    var tituloFilme = document.querySelector("input#tituloFilme");
    var urlFilme = document.querySelector("input#urlFilme");
    var filme = [tituloFilme.value,urlFilme.value,contador];
    tituloFilme.value ="";
    urlFilme.value = "";

    listarFilmes(filme)
}
function listarFilmes(filme){
    var galeria = document.querySelector("div#listaFilmes");
    var figure = document.createElement("figure");
    var legenda = document.createElement("figcaption");
    legenda.innerHTML="<h3>"+filme[0]+"</h3>";
    var image = document.createElement("img");
    var button = document.createElement("button");
    button.innerText="REMOVER";
    button.addEventListener("click",apagar);
    image.src=filme[1];
    image.id="figura"+filme[2];
    figure.id=filme[2];
    figure.appendChild(image);
    figure.appendChild(legenda);
    figure.appendChild(button);
    galeria.appendChild(figure);

}

function apagar(){
    console.log("olá mundo");
}