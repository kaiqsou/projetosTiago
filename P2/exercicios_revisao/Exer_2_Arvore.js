/*
Exercício 2: Remoção em Árvore Binária de Busca
A partir da árvore do exercício 1, as remoções ocorrem da seguinte forma:

a) Remover 8: O nó 8 é uma folha (não tem filhos), então ele é simplesmente removido.
b) Remover 15: O nó 15 tem dois filhos. O algoritmo o substitui pelo menor nó da sua sub-árvore direita (o nó 18) e depois remove a folha original do nó 18.
c) Remover 20: O nó 20 agora tem apenas um filho (o 25). O nó 20 é removido e seu filho 25 "sobe" para ocupar seu lugar.

A árvore final fica com a raiz 18, com 10 à sua esquerda e 25 à sua direita. O nó 12 fica à direita do 10.

*/

const BinaryTree = require('../Classes/BinaryTree.js');

// Cria a árvore original do exercício anterior
const tree = new BinaryTree();
const values = [15, 10, 20, 8, 12, 18, 25];
values.forEach(value => tree.insert(value));

console.log("--- Árvore Original (In-Order) ---");
tree.inOrder();

// Removendo os nós
tree.remove(8); // Remove um nó folha
console.log("\n--- Após remover 8 (In-Order) ---");
tree.inOrder();

tree.remove(15); // Remove um nó com dois filhos
console.log("\n--- Após remover 15 (In-Order) ---");
tree.inOrder();

tree.remove(20); // Remove um nó com um filho
console.log("\n--- Após remover 20 (In-Order) ---");
tree.inOrder();