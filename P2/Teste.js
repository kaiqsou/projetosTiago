const Sorter = require('./Sorter');
const Buscas = require('./Buscas');

const lista = Array.from({length: 50000}, () => Math.floor(Math.random() * 50000))

const quickSortLista = Sorter.quickSort(lista);

console.time("sequencial")
Buscas.sequencial(quickSortLista, 9);
console.timeEnd("sequencial")

console.time("interpolação")
Buscas.interpolacao(quickSortLista, 9);
console.timeEnd("interpolação")

console.time("binaria")
Buscas.binaria(quickSortLista, 9);
console.timeEnd("binaria")

console.log("");

console.time("mergeSort com sequencial")
Buscas.sequencial(Sorter.mergeSort(lista), 9);
console.timeEnd("mergeSort com sequencial")

console.time("mergeSort com interpolação")
Buscas.interpolacao(Sorter.mergeSort(lista), 8);
console.timeEnd("mergeSort com interpolação")

console.time("mergeSort com binaria")
Buscas.binaria(Sorter.mergeSort(lista), 8);
console.timeEnd("mergeSort com binaria")

console.log("");
/*
console.time("bubbleSort com sequencial")
Buscas.sequencial(Sorter.bubbleSort(lista));
console.timeEnd("bubbleSort com sequencial")

console.time("bubbleSort com interpolação")
Buscas.interpolacao(Sorter.bubbleSort(lista));
console.timeEnd("bubbleSort com interpolação")

console.time("bubbleSort com binaria")
Buscas.binaria(Sorter.bubbleSort(lista));
console.timeEnd("bubbleSort com binaria")
*/