const Buscas = require("./classes/Buscas.js");
const Sorter = require("./classes/Sorter.js");

// Questão 8: Busca por Interpolação vs. Binária
// A Buscas.interpolacao pode ser mais rápida que a Buscas.binaria, mas apenas sob condições ideais.
/* a) Crie um array grande (ex: 500.000 elementos) com números uniformemente
distribuídos (ex: [2, 4, 6, 8, ...]). */
const numeros = Array.from({length: 10000}, () => (Math.random() * 10000));
const array1 = Sorter.quickSort(numeros);

/* b) Crie um segundo array grande com números não uniformemente distribuídos (ex:
[1, 2, 3, 100, 150, 200, 500000, 500001, ...]). */

/* c) Para cada array, meça o tempo de busca por um elemento próximo ao final usando
Buscas.binaria e Buscas.interpolacao. */

console.time('Busca Binária no Array 1');
Buscas.binaria(array1, 1)
console.timeEnd('Busca Binária no Array 1');

/* d) Analise os resultados. Em qual cenário a busca por interpolação teve melhor
desempenho e por quê? */
