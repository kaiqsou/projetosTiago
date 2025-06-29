const Grafo = require("./classes/Grafo.js");

// Questão 9: Implementando Travessia em Grafo (BFS)

// A classe Grafo não possui um método de travessia para encontrar caminhos. Sua tarefa é adicionar essa funcionalidade.

/* a) Adicione um novo método à classe Grafo chamado
breadthFirstSearch(inicio, fim) que implemente o algoritmo de Busca em
Largura (BFS) para encontrar o caminho mais curto entre dois vértices. O método
deve retornar um array contendo a sequência de vértices do caminho (ex: ['A', 'B',
'C']). */

/* b) Crie uma instância de Grafo para representar um mapa simples (ex: cidades
vizinhas). */

const mapa = new Grafo();
mapa.adicionarVertice("Barra Bonita");
mapa.adicionarVertice("Jaú");

/* c) Use o seu novo método para encontrar e imprimir o caminho mais curto entre duas
cidades não adjacentes.
Dica: Você precisará de uma fila para controlar os vértices a serem visitados e de uma
forma de rastrear o "pai" de cada nó para reconstruir o caminho no final. */