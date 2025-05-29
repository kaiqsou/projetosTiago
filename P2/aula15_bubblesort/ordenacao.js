const Sorter = require('./Sorter');

const lista = [7, 2, 5, 1, 9];
const listaGrande = Array({ length: 1000 }, () => Math.floor(Math.random() * 1000) + 1);

/* console.log("Bubble Sort:", Sorter.bubbleSort(lista));
console.log("Quick Sort:", Sorter.quickSort(lista));
console.log("Merge Sort:", Sorter.mergeSort(lista));
*/

console.log("Bubble Sort:", Sorter.bubbleSort(listaGrande));
console.log("Quick Sort:", Sorter.quickSort(listaGrande));
console.log("Merge Sort:", Sorter.mergeSort(listaGrande));