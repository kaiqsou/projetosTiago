/*
Exercício 12: Ordenando com Merge Sort
Array: [7, 2, 1, 6, 8, 5, 3, 4]
O mergeSort divide o array recursivamente até obter arrays de um elemento:

Divide: [7, 2, 1, 6] e [8, 5, 3, 4]
Divide: [7, 2], [1, 6] e [8, 5], [3, 4]
Divide: [7], [2], [1], [6], [8], [5], [3], [4] Agora, ele começa a mesclar (intercalar e ordenar) os arrays de volta:
Mescla: [2, 7], [1, 6], [5, 8], [3, 4]
Mescla: [1, 2, 6, 7] e [3, 4, 5, 8]
Mescla Final: [1, 2, 3, 4, 5, 6, 7, 8]
*/

const Sorter = require('../Classes/Sorter.js');

const arr = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(`Array original: [${arr}]`);

/*
* O Merge Sort divide o array até ter apenas elementos únicos e
* depois os mescla (merge) em ordem.
*
* 1. Divide: [7,2,1,6] e [8,5,3,4]
* 2. Divide mais: [7,2], [1,6] e [8,5], [3,4]
* 3. Mescla ordenando: [2,7], [1,6] e [5,8], [3,4]
* 4. Mescla ordenando: [1,2,6,7] e [3,4,5,8]
* 5. Mescla final: [1,2,3,4,5,6,7,8]
*/

const ordenado = Sorter.mergeSort(arr);
console.log(`Array ordenado: [${ordenado}]`);