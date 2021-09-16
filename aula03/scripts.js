var numeroSecreto = parseInt(Math.random(0,9)*11);
var resultado = document.querySelector("h2#resultado");
var chance = 3;




function Chutar(){
    var chute = parseInt(document.querySelector("input#valor").value);
    console.log(chute);

    chance-=1;
 
    
    if(chute==numeroSecreto){
        
        resultado.innerText = "Parabéns você acertou";

    }
    else {
        if(chance>0){
            resultado.innerText = "Você errou, e ainda tem "+chance+" chance";
        }

        else{
            resultado.innerText = "GAME OVER";
        }
    }
}