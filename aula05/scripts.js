function adicionarFilme(){
    var tituloFilme = document.querySelector("input#tituloFilme");
    var urlFilme = document.querySelector("input#urlFilme");
    var filme = [tituloFilme.value,urlFilme.value];
    tituloFilme.value ="";
    urlFilme.value = "";
}

