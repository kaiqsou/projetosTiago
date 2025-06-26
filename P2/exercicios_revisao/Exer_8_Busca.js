/*
Exercício 8: Busca Sequencial vs. Binária
Array: [45, 23, 11, 89, 77, 98, 4, 28, 65, 43] | Valor: 28
Busca Sequencial: Requer 8 comparações, pois o valor 28 está na 8ª posição (índice 7).
Busca Binária: Primeiro, o array deve ser ordenado: [4, 11, 23, 28, 43, 45, 65, 77, 89, 98]. A busca binária encontra o valor em 4 comparações, pois a cada passo ela descarta metade do espaço de busca.
*/
const Buscas = require('../Classes/Buscas.js');
const Sorter = require('../Classes/Sorter.js');

const desordenado = [45, 23, 11, 89, 77, 98, 4, 28, 65, 43];
const valor = 28;

// 1. Busca Sequencial
const indiceSeq = Buscas.sequencial(desordenado, valor);
console.log(`Busca Sequencial: valor ${valor} encontrado no índice ${indiceSeq}.`);
console.log("(Isso exigiu 8 comparações no array original).");

// 2. Busca Binária
const ordenado = Sorter.bubbleSort(desordenado); // ou qualquer outro sort
const indiceBin = Buscas.binaria(ordenado, valor);
console.log(`\nArray ordenado: [${ordenado}]`);
console.log(`Busca Binária: valor ${valor} encontrado no índice ${indiceBin}.`);
console.log("(Isso exigiu 4 comparações no array ordenado).");