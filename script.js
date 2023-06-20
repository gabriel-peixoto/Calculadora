/*function input (num){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
}

function limpar (){
    document.getElementById("resultado").innerHTML = "";
}

function apagar (){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado != ""){
        document.getElementById("resultado") = eval(resultado);
    }
    else{
        document.getElementById("resultado").innerHTML = "0"
    }

}*/

var resultado = document.getElementById("resultado");

function adicionarNumero(numero) {
  resultado.value += numero;
}

function adicionarOperador(operador) {
  resultado.value += operador;
}

function calcular() {
  try {
    resultado.value = eval(resultado.value);
  } catch (error) {
    resultado.value = "Erro";
  }
}

function limpar() {
  resultado.value = "";
}

function apagarUltimoCaractere() {
    resultado.value = resultado.value.slice(0, -1);
  }



    document.addEventListener("keydown", function(event) {
        var key = event.key;
  
        if (key === "Enter") {
          event.preventDefault();
          calcular();
        } else if (key === "Backspace") {
            apagarUltimoCaractere();
        } else if (/[0-9+\-*/.=]/.test(key)) {
          resultado.value += key;
        } else if (key === "Escape") {
          limpar();
            else if (key === ",") {
          adicionarOperador('.');
        }
      });
