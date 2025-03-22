/* Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e 
mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).*/

let tempFahrenheit = prompt("Insira aqui a temperatura em graus Fahrenheit: ");
let tempCelsius = ((tempFahrenheit - 32) / 9) * 5;

alert(`A temperatura em graus Celsius é: ${tempCelsius}`);