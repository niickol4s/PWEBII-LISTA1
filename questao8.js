// Q8. Crie um programa que receba três números e determine qual é o maior.

function maiorNumero(n) {
    return Math.max(...n);
  }
  
  let numeros = [3];
  
  for (let i =0; i < 3; i++) {
    numeros[i] = prompt("Número " + (i + 1) + ": ");
  }
  
  console.log("Lista: " + numeros);
  console.log("Maior número: " + maiorNumero(numeros));