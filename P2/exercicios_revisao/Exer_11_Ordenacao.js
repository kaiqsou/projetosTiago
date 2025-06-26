/*

Exercício 11: Ordenando com Quick Sort
Array: [7, 2, 1, 6, 8, 5, 3, 4]
O pivô inicial é 4. O algoritmo percorre o resto do array, dividindo-o em dois sub-arrays: um com elementos menores que o pivô e outro com elementos maiores.

menores: [2, 1, 3]
maiores: [7, 6, 8, 5] Em seguida, o quickSort é chamado recursivamente para menores e maiores, e o resultado final é a junção de quickSort(menores), o pivô, e quickSort(maiores).

*/

const Sorter = require('../Classes/Sorter.js');

const arr = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(`Array original: [${arr}]`);

/*
* O código mostra o resultado final.
* A primeira partição funciona assim:
* Pivô: 4 (o último elemento)
*
* O algoritmo percorre [7, 2, 1, 6, 8, 5, 3] e compara com 4.
* Array 'menores': [2, 1, 3]
* Array 'maiores': [7, 6, 8, 5]
*
* A chamada recursiva será: quickSort([2, 1, 3]), 4, quickSort([7, 6, 8, 5])
*/

const ordenado = Sorter.quickSort(arr);
console.log(`Array ordenado: [${ordenado}]`);