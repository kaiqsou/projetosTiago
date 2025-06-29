const Buscas = require("./classes/Buscas.js");

// Questão 2: Encontrando Elementos

// Dado o array ordenado [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], utilize a classe Buscas para encontrar o elemento 23. 

// a) Escreva o código que usa Buscas.sequencial para encontrar o índice do número 23. 

const numeros = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const valor = 23;

console.log("BUSCA SEQUENCIAL: O índice do número 23 é ", Buscas.sequencial(numeros, valor));

// b) Escreva o código que usa Buscas.binaria para encontrar o índice do mesmo número.

console.log("BUSCA BINÁRIA: O índice do número 23 é ", Buscas.binaria(numeros, valor));

// c) Imprima os resultados e explique por que a busca binária é mais eficiente para este cenário.

/* 
R: o mais eficiente é a busca binária, pois ela funciona muito bem para buscas de arrays ordenados, já que ela começa direto pelo valor
que está localizado no meio do array e sua pesquisa pode, na maioria das vezes, ser mais rápida. 

Acredito que apenas em alguns casos específicos a busca sequencial possa superar a velocidade da busca binária, 
como por exemplo, o valor procurado ser literalmente o primeiro item da lista.
*/