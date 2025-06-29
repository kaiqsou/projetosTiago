const Sorter = require("./classes/Sorter.js");

// Questão 1: Ordenando um Conjunto de Dados
// Use a classe Sorter para ordenar o seguinte conjunto de números: [64, 34, 25, 12,22, 11, 90].
// a) Implemente o código para ordenar o array usando o método Sorter.bubbleSort.

const desordenado = [64, 34, 25, 12, 22, 11, 90]

console.log("BubbleSort:", Sorter.bubbleSort(desordenado));


// b) Implemente o código para ordenar o mesmo array usando o método Sorter.mergeSort.

console.log("MergeSort:", Sorter.mergeSort(desordenado));

/* c) Imprima no console o resultado de ambas as ordenações. Qual método você esperaria que fosse mais rápido para um array 
com 1 milhão de números e por quê? */

/* R: Acredito que seja o bubbleSort é mais rápido, já que o mergeSort tem um processo de divisão do array, ordenação e ainda precisa unir
os elementos depois. */