//Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número]

let numero = prompt('Insira aqui um número');

if (isNaN(numero)) {
    alert("Entrada inválida! Apenas números são permitidos.");
} else {
    alert(`O número inserido foi: ${numero}`);
console.log(`O número inserido foi: ${numero}`);
}


