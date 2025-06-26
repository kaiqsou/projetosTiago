/*


Exercício 4: Diferenças entre BinaryTree e AVLTree
Ao inserir 10, 20, 30, 40, 50 em ordem:

BinaryTree: Cria uma árvore completamente desbalanceada (degenerada), que se parece com uma lista ligada: 10 -> 20 -> 30 -> 40 -> 50
AVLTree: A árvore realiza rotações para se manter balanceada. Após todas as inserções, a árvore final é:
    20
   /  \
  10  40
     /  \
    30  50
A principal diferença é que a AVLTree se auto-balanceia através de rotações para garantir que a altura da árvore seja sempre logarítmica (O(log n)), o que mantém as operações de busca, inserção e remoção eficientes. A BinaryTree comum não faz isso e pode atingir uma altura linear (O(n)) no pior caso.


*/

const BinaryTree = require('../Classes/BinaryTree.js');
const AVLTree = require('../Classes/AVLNode.js');

const degenerateValues = [10, 20, 30, 40, 50];

// Árvore Binária Comum
const bst = new BinaryTree();
degenerateValues.forEach(v => bst.insert(v));

console.log("--- Árvore Binária Comum (Pre-Order) ---");
// A ordem pré-ordem revela a estrutura degenerada, como uma lista.
bst.preOrder(); // Saída: 10, 20, 30, 40, 50

// Árvore AVL
const avl = new AVLTree();
degenerateValues.forEach(v => avl.insert(v));

console.log("\n--- Árvore AVL (Pre-Order) ---");
// A ordem pré-ordem mostra que a raiz mudou para manter o balanceamento.
avl.preOrder(avl.root); // Saída: 20, 10, 40, 30, 50 (depende da implementação da rotação)

console.log(`\nComentário: A árvore binária comum se tornou uma 'lista ligada' (desbalanceada),
enquanto a AVL realizou rotações para manter sua altura baixa e as operações eficientes.`);