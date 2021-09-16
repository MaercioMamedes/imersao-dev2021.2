const dolar = 5.24; // cotação de 16-09-2021 10:08
function Converter() {
  var entrada = document.querySelector("input#valor");
  var saida = document.querySelector("h2#valorConvertido");
  var seletor = document.querySelector('input[name="seletor"]:checked')

  
  if(seletor.value=="reais"){
    
      var valorReais = parseFloat(entrada.value) / dolar;
      saida.innerText = valorReais.toLocaleString("pt-br",{ style: "currency", currency: "USD" },",", ".");
    
  } else{
    
    var valorDolar = parseFloat(entrada.value)*dolar;
    saida.innerText = valorDolar.toLocaleString("pt-br",{style:"currency",currency:"BRL"},",",".");
    
  }
  

}
