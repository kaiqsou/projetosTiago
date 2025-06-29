const Sorter = require("./classes/Sorter.js");

// Questão 6: Análise de Desempenho do Quick Sort

// A implementação de Sorter.quickSort usa o último elemento como pivô. Isso pode levar a um desempenho ruim em certos cenários.

// a) Crie um array com 10.000 números aleatórios.

const lista1 = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));

// b) Crie um segundo array com 10.000 números já ordenados (de 1 a 10.000).

const lista2 = Sorter.quickSort(Array.from({length: 10000}, () =>Math.floor(Math.random() * 10000)));

// c) Use console.time('label') e console.timeEnd('label') para medir o tempo de execução do Sorter.quickSort em cada um dos arrays.
console.time('Quick Sort');
Sorter.quickSort(lista1);
console.timeEnd('Quick Sort');

console.time('Quick Sort');
Sorter.quickSort(lista2);
console.timeEnd('Quick Sort');

// d) Imprima os tempos e explique por que há uma diferença tão grande de desempenho.