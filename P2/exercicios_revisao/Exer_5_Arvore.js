/*


Exercício 5: Balanceamento da AVL
Ao inserir 30, 20, 10, a árvore fica desbalanceada no nó 30 (caso "Esquerda-Esquerda"). Uma Rotação Simples à Direita (rotateRight) é executada no nó 30 para corrigir o balanceamento, e 20 se torna a nova raiz.
Ao inserir o valor 25 na árvore resultante (raiz=20, left=10, right=30), o 25 é inserido à esquerda do 30. A árvore fica:
    20
   /  \
  10  30
     /
    25
Neste caso específico, nenhuma nova rotação ocorre, pois os fatores de balanceamento de todos os nós permanecem dentro do limite aceitável (-1, 0 ou 1).
Nota: Para forçar uma rotação dupla, como a Esquerda-Direita, seria necessário inserir uma sequência como 30, 10, 20.


*/

const AVLTree = require('../Classes/AVLNode.js');

const avl = new AVLTree();

console.log("Inserindo 30, 20, 10...");
avl.insert(30);
avl.insert(20);
avl.insert(10); // Causa uma Rotação Simples à Direita no nó 30.
console.log("Raiz da árvore após a primeira rotação:", avl.root.value); // Esperado: 20

console.log("\nInserindo 25...");
avl.insert(25);
console.log("Raiz da árvore após inserir 25:", avl.root.value); // Esperado: 20
console.log("Nenhuma nova rotação ocorreu, pois a árvore permaneceu balanceada.");