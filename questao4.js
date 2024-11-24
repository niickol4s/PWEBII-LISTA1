// Q4. Crie uma função que recebe uma string como parâmetro e retorna a quantidade de vogais (a, e, i, o, u) na string.

function quantidadeVogais(str) {
    let vogais = ["a", "e", "i", "o", "u"];
    let qtdVogais = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i].toLowerCase())) {
        qtdVogais++;
      }
    }
    
    return qtdVogais;
  }
  
  let palavra = prompt("Palavra: ");
  
  console.log("Palavra: " + palavra);
  console.log("Quantidade de vogais: " + quantidadeVogais(palavra));