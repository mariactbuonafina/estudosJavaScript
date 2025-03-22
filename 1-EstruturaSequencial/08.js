/* Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o
total do seu salário no referido mês. */

let dinheirohora = prompt("Insira aqui o valor que você ganha por hora: ");
let horastrabalhadas = prompt("Insira aqui o número de horas trabalhadas nesse mês: ");
let salario = (dinheirohora * horastrabalhadas);

alert(`O seu salário total com base nas horas trabalhadas é: ${salario}`);