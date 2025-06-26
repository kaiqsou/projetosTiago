/*

Exercício 6: Modelando uma Rede Social
Após adicionar os vértices e as arestas, o grafo impresso seria:
Ana -> Beto, Caio, Edu
Beto -> Ana, Dani
Caio -> Ana, Dani
Dani -> Beto, Caio
Edu -> Ana
Após chamar removerVertice('Caio'), o método remove o vértice 'Caio' e também limpa as referências a ele nos outros vértices (Ana e Dani). O grafo final fica:
Ana -> Beto, Edu
Beto -> Ana, Dani
Dani -> Beto
Edu -> Ana

*/

const Grafo = require('../Classes/Grafo.js');

const redeSocial = new Grafo();

// 1. Adicionar vértices
const amigos = ['Ana', 'Beto', 'Caio', 'Dani', 'Edu'];
amigos.forEach(amigo => redeSocial.adicionarVertice(amigo));

// 2. Adicionar arestas
redeSocial.adicionarAresta('Ana', 'Beto');
redeSocial.adicionarAresta('Ana', 'Caio');
redeSocial.adicionarAresta('Beto', 'Dani');
redeSocial.adicionarAresta('Caio', 'Dani');
redeSocial.adicionarAresta('Edu', 'Ana');

// 3. Imprimir o grafo original
console.log("--- Rede Social Original ---");
redeSocial.imprimirGrafo();

// 4. Remover 'Caio' e imprimir novamente
console.log("\n--- Removendo Caio da rede... ---");
redeSocial.removerVertice('Caio');
console.log("\n--- Rede Social Atualizada ---");
redeSocial.imprimirGrafo();