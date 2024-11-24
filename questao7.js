// Q7. Crie uma função que receba uma string e retorne a string invertida.

function stringInvertida(str) {
    return str.split("").reverse().join("");
  }
  
  let palavra = prompt("Palavra: ");
  
  console.log("Palavra: " + palavra);
  console.log("String invertida: " + stringInvertida(palavra));