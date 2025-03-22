/* 2 números inteiros e um número real. Calcule e mostre:
a. o produto do dobro do primeiro com metade do segundo.
b. a soma do triplo do primeiro com o terceiro.
c. o terceiro elevado ao cubo.
*/

let numInt1, numInt2, numReal;

while (true) {
    numInt1 = prompt("Insira aqui um número INTEIRO: ");
    numInt2 = prompt("Insira aqui um número INTEIRO: ");
    numReal = prompt("Insira aqui um número REAL: ");

    numInt1 = Number(numInt1);
    numInt2 = Number(numInt2);
    numReal = Number(numReal);

    if (
        !Number.isNaN(numInt1) && 
        !Number.isNaN(numInt2) && 
        !Number.isNaN(numReal) && 
        Number.isInteger(numInt1) && 
        Number.isInteger(numInt2)
    ) {
        break;
    } else {
        alert("Erro: Insira dois números inteiros e um número real válido!");
    }
}

let produtoDobro = (numInt1 * 2) * (numInt2 / 2); 
let somaTriplo = (numInt1 * 3) + numReal; 
let cubo = numReal ** 3;

alert(`a) O produto do dobro do primeiro número com metade do segundo número é: ${produtoDobro} 
b) A soma do triplo do primeiro número com o terceiro número é: ${somaTriplo}
c) O valor do terceiro número elevado ao cubo é: ${cubo}`);
