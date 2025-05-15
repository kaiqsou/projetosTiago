const Grafo = require('./Grafo.js');

/*

1. Crie um grafo com os vértices 1, 2, 3, 4 e as arestas 1-2, 1-3, 2-4.
- Imprima o grafo.
- Remova o vértice 2 e imprima o grafo novamente.

*/

const meuGrafo = new Grafo();

meuGrafo.adicionarVertice("1");
meuGrafo.adicionarVertice("2");
meuGrafo.adicionarVertice("3");
meuGrafo.adicionarVertice("4");

meuGrafo.adicionarAresta("1", "2");
meuGrafo.adicionarAresta("1", "3");
meuGrafo.adicionarAresta("2", "4");

meuGrafo.imprimirGrafo();

meuGrafo.removerVertice("2");

meuGrafo.imprimirGrafo();