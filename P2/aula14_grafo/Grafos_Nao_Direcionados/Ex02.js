const GrafoPonderado = require('../Grafos_Ponderados/Grafo_Ponderado.js');

/*

2. Adicione pesos às arestas no grafo.
- Implemente o algoritmo de busca em largura (BFS).
- Crie um grafo ponderado e calcule o menor caminho entre dois vértices.

*/

const grafo = new GrafoPonderado();
grafo.adicionarAresta("A", "B", 15);
grafo.adicionarAresta("C", "D", 16);
grafo.adicionarAresta("D", "B", 11);
grafo.adicionarAresta("E", "A", 19);




