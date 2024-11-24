// Q3. Crie uma calculadora simples que pergunte ao usuário dois números e, em seguida, a operação que ele deseja realizar (soma, subtração, multiplicação ou divisão). O programa deve imprimir o resultado da operação.

let opcao;

do {
  console.log("Calculadora");

  console.log("Operações:");
  console.log("1 - Soma;");
  console.log("2 - Subtração;");
  console.log("3 - Multiplicação;");
  console.log("4 - Divisão;");
  console.log("0 - Sair.");
  opcao = prompt("Operação: ");
  opcao = parseInt(opcao);
  
  let num1;
  let num2;
  
  switch (opcao) {
    case 1:
      console.log("Operação: 1 - Soma");
      num1 = prompt("Número 1: ");
      num2 = prompt("Número 2: ");
      console.log("Resultado: " + (parseInt(num1) + parseInt(num2)));
      break;
    case 2:
      console.log("Operação: 2 - Subtração");
      num1 = prompt("Número 1: ");
      num2 = prompt("Número 2: ");
      console.log("Resultado: " + (parseInt(num1) - parseInt(num2)));
      break;
    case 3:
      console.log("Operação: 3 - Multiplicação");
      num1 = prompt("Número 1: ");
      num2 = prompt("Número 2: ");
      console.log("Resultado: " + (parseInt(num1) * parseInt(num2)));
      break;
    case 4:
      console.log("Operação: 4 - Divisão");
      num1 = prompt("Número 1: ");
      num2 = prompt("Número 2: ");

      if (parseInt(num2) === 0) {
        console.log("Divisor precisa ser diferente de zero.");
      } else {
        console.log("Resultado: " + (parseInt(num1) / parseInt(num2)));  
      }
      
      break;
    case 0:
      console.log("Sistema encerrado.");
      break;
    default:
      console.log("Opção inválida.");
      break;
  }
  
} while (opcao != 0);

