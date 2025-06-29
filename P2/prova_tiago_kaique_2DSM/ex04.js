const AVLTree = require("./classes/AVLTree.js");
const BinaryTree = require("./classes/BinaryTree.js");

// Questão 4: Comparando BinaryTree vs. AVLTree

// Demonstre a principal diferença entre uma árvore de busca binária comum e uma árvore AVL.
// a) Crie uma instância da BinaryTree e insira a seguinte sequência de números (que já está ordenada): [10, 20, 30, 40, 50, 60].

const arvore = new BinaryTree();
const numeros = [10, 20, 30, 40, 50, 60];
numeros.forEach(numeros => arvore.insert(numeros));

// b) Crie uma instância da AVLTree e insira a mesma sequência de números.

const arvoreAVL = new AVLTree();
numeros.forEach(numeros => arvoreAVL.insert(numeros));

// c) Após as inserções, acesse e imprima a raiz de cada árvore (tree.root) para comparar suas estruturas.

console.log("Raíz da Árvore original:", arvore.root.value);
console.log("Raíz da Árvore AVL:", arvoreAVL.root.value);

/* d) Descreva a diferença observada na estrutura das duas árvores. Por que a estrutura
da AVLTree é superior em termos de desempenho de busca? */

/* R: Porque diferentemente da estrutura da árvore comum, a AVL balanceia ambos os lados, deixando o mais próximo possível
os valores da raíz, diminuindo a distância para percorrer. */