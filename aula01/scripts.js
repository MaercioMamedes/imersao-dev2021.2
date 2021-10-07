function calcular(){
    var nota1 = parseFloat(document.querySelector("input#n1").value);
    var nota2 = parseFloat(document.querySelector("input#n2").value);
    var nota3 = parseFloat(document.querySelector("input#n3").value);
    var nota4 = parseFloat(document.querySelector("input#n4").value);

    var media = (nota1+nota2+nota3+nota4)/4;

    var resultado = "Sua média é ";

    var areaResultado = window.document.querySelector("div.container h2#media");
    
    areaResultado.innerText = resultado + media;
    console.log(areaResultado.innerText);
}

function instrucoes(){
    var divInstrucoes = document.getElementById("instrucoes");
    divInstrucoes.innerHTML = `
        <h2>Instruções</h2>
        <p>Digite as notas nos campos correspontes em seguida clique em calcular para saber a média</p>`;
    
}

function limparInstrucoes(){
    var divInstrucoes = document.getElementById("instrucoes");
    divInstrucoes.innerHTML = "";

}