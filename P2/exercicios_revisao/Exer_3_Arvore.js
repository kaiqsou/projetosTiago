/*
Exercício 3: Buscando Elementos:

search(12): Retorna true. O algoritmo navega: 15 -> 10 -> 12.

search(30): Retorna false. O algoritmo navega: 15 -> 20 -> 25, e como 30 
seria à direita de 25 mas não há nó, a busca encerra.
*/
const BinaryTree = require('../Classes/BinaryTree.js');

const tree = new BinaryTree();
const values = [15, 10, 20, 8, 12, 18, 25];
values.forEach(value => tree.insert(value));

const exists12 = tree.search(12);
console.log(`O valor 12 existe na árvore? ${exists12}`); // Esperado: true

const exists30 = tree.search(30);
console.log(`O valor 30 existe na árvore? ${exists30}`); // Esperado: false

