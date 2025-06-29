const AVLTree = require("./classes/AVLTree.js");
const BinaryTree = require("./classes/BinaryTree.js");
const Buscas = require("./classes/Buscas.js");
const Sorter = require("./classes/Sorter.js");

// Questão 3: Construindo e Percorrendo uma Árvore Binária

/* Usando a classe BinaryTree, construa uma árvore a partir dos seguintes valores,
inseridos nesta ordem: [50, 30, 70, 20, 40, 60, 80]. */

// a) Instancie uma BinaryTree.

const valores = [50, 30, 70, 20, 40, 60, 80];
const arvore = new BinaryTree();

// b) Insira cada um dos números na árvore.

// opção 1: valores.forEach(valores => arvore.insert(valores));

console.log("Inserindo na árvore: 50");
arvore.insert(50)

console.log("Inserindo na árvore: 30");
arvore.insert(30)

console.log("Inserindo na árvore: 70");
arvore.insert(70)

console.log("Inserindo na árvore: 20");
arvore.insert(20)

console.log("Inserindo na árvore: 40");
arvore.insert(40)

console.log("Inserindo na árvore: 60");
arvore.insert(60)

console.log("Inserindo na árvore: 80");
arvore.insert(80)

/* c) Utilize o método preOrder para percorrer a árvore e imprima a sequência de valores no console. 
O resultado reflete a ordem de inserção ou a estrutura da árvore? */

arvore.preOrder();

/* R: É a estrutura da árvore. O primeiro nó se torna a raiz e os próximos são inseridos para as subárvores correspondentes,
se for menor, irá para a subárvore da esquerda, caso contrário, para a subárvore da direita. */