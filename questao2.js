// Questão 2

function somarArray(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    return soma;
}

let numeros = [2, 4, 6, 8];

console.log("Lista: " + numeros);
console.log("Soma: " + somarArray(numeros));