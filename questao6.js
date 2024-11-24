// Q6. Crie um programa que receba um número inteiro e mostre uma contagem regressiva até zero no console.

function contagemRegressiva(n) {
    for (let i = n; i >= 0; i--) {
      console.log(i);
    }
  }
  
  let numero = prompt("Número: ");
  
  numero = parseInt(numero);
  
  console.log("Número: " + numero);
  contagemRegressiva(numero);