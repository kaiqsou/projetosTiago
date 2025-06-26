/*
Exercício 15: Análise de Complexidade na BinaryTree
Para os métodos insert, search e remove:

Caso Médio: O(log n). Ocorre quando a árvore está razoavelmente balanceada. A altura da árvore é logarítmica em relação ao número de nós, e as operações levam um tempo proporcional à altura.
Pior Caso: O(n). Ocorre quando a árvore está completamente desbalanceada (degenerada), parecendo uma lista ligada. Isso acontece, por exemplo, ao inserir elementos já ordenados. A altura da árvore se torna n, e a busca por um elemento se assemelha a uma busca sequencial.

/*
* Análise de complexidade de tempo (Big O) dos métodos `insert`, `search`
* e `remove` na classe `BinaryTree.js`.
*
* - Caso Médio: O(log n)
* Justificativa: Em uma árvore binária de busca razoavelmente balanceada,
* a altura da árvore é logarítmica (log n). Como essas operações percorrem
* um caminho da raiz até um nó, o tempo de execução é proporcional à altura.
*
* - Pior Caso: O(n)
* Justificativa: O pior caso acontece quando a árvore se torna completamente
* desbalanceada (também chamada de árvore degenerada), se assemelhando a uma
* lista ligada. Isso ocorre se os valores são inseridos em ordem crescente
* ou decrescente. Nesse cenário, a altura da árvore é 'n', e as operações
* levam tempo linear para serem concluídas.
*/