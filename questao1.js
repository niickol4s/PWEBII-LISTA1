// Questão 1

let nome;
let idade;
const maioridade = 18;

nome = prompt("Nome: ");
idade = prompt("Idade: ");

if (idade >= maioridade) {
	console.log(nome + " é maior de idade.");
} else {
	console.log(nome + " é menor de idade.");
}