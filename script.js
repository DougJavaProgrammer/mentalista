var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  //possibilidade 1

  if (chute == numeroSecreto) {
    console.log("Acertou");
    elementoResultado.innerHTML = "Você Acertou";
  } else if (chute > 10 || chute < 0) {
    console.log("Você deve digitar um número de 0 a 10");
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute < numeroSecreto) {
    console.log("Número sorteado: " + numeroSecreto);
    elementoResultado.innerHTML =
      "Errou e a dica é: o número sorteado é maior do que você digitou";
  } else {
    console.log("Número sorteado: " + numeroSecreto);
    elementoResultado.innerHTML =
      " Errou e a dica é: o número sorteado é menor do que você digitou";
  }

  //possibilidade 2

  /*if(chute >= 0 && chute <=10){
    if(chute == numeroSecreto){
      console.log("Acertou")
    }else{
      console.log("Errou")
    }
  }else{
    console.log("Digite um numero de 0 a 10")
  }*/
}