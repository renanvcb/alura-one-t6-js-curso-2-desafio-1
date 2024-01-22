let title = document.querySelector("h1");
title.innerHTML = "Hora do Desafio";

function printConsole() {
  console.log("O botão foi clicado.");
}

function showAlert() {
  alert("Eu amo JS!");
}

function askCityPrompt() {
  let city = prompt("Insira o nome de uma cidade brasileira.");
  alert(`Estive em ${city} e lembrei de você!`);
}

function sumNumbers() {
  let firstNumber = parseInt(prompt("Informe o primeiro número"));
  let secondNumber = parseInt(prompt("Informe o segundo número"));
  alert(`A soma dos números é igual a ${firstNumber + secondNumber}.`);
}
