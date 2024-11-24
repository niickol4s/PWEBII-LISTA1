// Q5. Crie um programa que receba três números do usuário e imprima-os em ordem crescente.

function ordenarNumeros(n) {
    return n.sort();
  }
  
  let numeros = [3];
  
  for (let i = 0; i < 3; i++) {
    numeros[i] = prompt("Número " + (i + 1) + ": ");
  }
  
  console.log("Lista: " + numeros);
  console.log("Ordem crescente: " + ordenarNumeros(numeros));