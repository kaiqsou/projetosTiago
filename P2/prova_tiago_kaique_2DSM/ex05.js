const Grafo = require("./classes/Grafo.js");

// Questão 5: Modelando uma Rede de Contatos

// Use a classe Grafo para modelar uma pequena rede de amizades.
// a) Crie uma instância da classe Grafo.
const rede = new Grafo();

// b) Adicione os seguintes vértices: 'Alice', 'Bruno', 'Carlos', 'Diana'.
rede.adicionarVertice("Alice");
rede.adicionarVertice("Bruno");
rede.adicionarVertice("Carlos");
rede.adicionarVertice("Diana");

/* c) Adicione as seguintes arestas (amizades): ('Alice', 'Bruno'), ('Bruno', 'Carlos'),
('Carlos', 'Diana'), ('Alice', 'Diana'). */
rede.adicionarAresta("Alice", "Bruno");
rede.adicionarAresta("Bruno", "Carlos");
rede.adicionarAresta("Carlos", "Diana");
rede.adicionarAresta("Alice", "Diana");

// d) Use o método imprimirGrafo() para mostrar a lista de adjacência da rede.
console.log("---- Rede original ----")
rede.imprimirGrafo();

/* e) Agora, simule que 'Carlos' e 'Diana' deixaram de ser amigos. Remova a aresta entre
eles e imprima o grafo novamente para confirmar a alteração. */
rede.removerAresta("Carlos", "Diana");

console.log("\n---- Rede ao remover a amizade entre Carlos e Diana ----");
rede.imprimirGrafo();