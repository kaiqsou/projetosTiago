/*
Exercício 10: Ordenando com Bubble Sort
Array: [5, 1, 4, 2, 8]

Após a 1ª passada: [1, 4, 2, 5, 8] (o 8 "borbulhou" para o final da sua seção)
Após a 2ª passada: [1, 2, 4, 5, 8] (o 5 "borbulhou" para o final da sua seção)
Após a 3ª passada: [1, 2, 4, 5, 8] (nenhuma troca ocorre, o algoritmo termina)
*/

const Sorter = require('../Classes/Sorter.js');

const arr = [5, 1, 4, 2, 8];
console.log(`Array original: [${arr}]`);

/*
* O código abaixo apenas mostra o resultado final.
* Acompanhamento manual das passadas:
*
* Passada 1: [1, 4, 2, 5, 8]
* Passada 2: [1, 2, 4, 5, 8]
* Passada 3: [1, 2, 4, 5, 8] (Nenhuma troca, o algoritmo para)
*/

const ordenado = Sorter.bubbleSort(arr);
console.log(`Array ordenado: [${ordenado}]`);