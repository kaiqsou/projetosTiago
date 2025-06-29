const AVLTree = require("./classes/AVLTree.js");
const BinaryTree = require("./classes/BinaryTree.js");

// Questão 7: O Custo do Auto-Balanceamento
/* Uma AVLTree garante buscas rápidas, mas o processo de inserção tem um custo adicional
(as rotações). Meça e compare esse custo. */
// a) Gere um array com 20.000 números aleatórios.
const numeros = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));

// b) Meça o tempo total para inserir todos os números do array em uma instância de BinaryTree.
const arvore = new BinaryTree();
console.time('Inserção Binary Tree');
numeros.forEach(numeros => arvore.insert(numeros));
console.timeEnd('Inserção Binary Tree');

// c) Meça o tempo total para inserir os mesmos números em uma instância de AVLTree.
const arvoreAVL = new AVLTree();
console.time('Inserção AVL Tree');
numeros.forEach(numeros => arvoreAVL.insert(numeros));
console.timeEnd('Inserção AVL Tree');

// d) Compare os tempos de inserção. Em que tipo de aplicação vale a pena pagar o "preço" extra na inserção da AVLTree?

/*R: É bom usar quando você quer uma árvore mais balanceada e com menos valores, pois ele reorganiza toda a árvore, de acordo com a quantidade
de valores inseridos. */

