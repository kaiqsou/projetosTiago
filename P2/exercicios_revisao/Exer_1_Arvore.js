/*
Exercício 1: Construindo e Percorrendo uma Árvore Binária de Busca
Ao inserir 15, 10, 20, 8, 12, 18, 25 na BinaryTree, os percursos resultantes são:

In-Order (em-ordem): 8, 10, 12, 15, 18, 20, 25
Visita a sub-árvore esquerda, o nó, e depois a sub-árvore direita. O resultado é 
sempre uma lista ordenada dos valores.

Pre-Order (pré-ordem): 15, 10, 8, 12, 20, 18, 25
Visita o nó, a sub-árvore esquerda, e depois a sub-árvore direita.

Post-Order (pós-ordem): 8, 12, 10, 18, 25, 20, 15
Visita a sub-árvore esquerda, a sub-árvore direita, e depois o nó.
*/
const BinaryTree = require('../Classes/BinaryTree.js');

const tree = new BinaryTree();
const values = [15, 10, 20, 8, 12, 18, 25];
values.forEach(value => tree.insert(value));
// values.forEach((value,index) => tree.insert(value));

console.log("Percurso In-Order (em-ordem):");
// Esperado: 8, 10, 12, 15, 18, 20, 25
tree.inOrder();

console.log("\nPercurso Pre-Order (pré-ordem):");
// Esperado: 15, 10, 8, 12, 20, 18, 25  
tree.preOrder();

console.log("\nPercurso Post-Order (pós-ordem):");
// Esperado: 8, 12, 10, 18, 25, 20, 15
tree.postOrder();