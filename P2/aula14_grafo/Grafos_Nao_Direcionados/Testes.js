const Grafo = require('./Grafo.js');

const meuGrafo = new Grafo();

meuGrafo.adicionarVertice('Tiago');
meuGrafo.adicionarVertice('Helena');
meuGrafo.adicionarVertice('Antonio');
meuGrafo.adicionarVertice('Tamires');
meuGrafo.adicionarVertice('Candida');
meuGrafo.adicionarVertice('Joao');

meuGrafo.adicionarAresta('Tiago', 'Helena');
meuGrafo.adicionarAresta('Tiago', 'Antonio');
meuGrafo.adicionarAresta('Tamires', 'Helena');
meuGrafo.adicionarAresta('Tamires', 'Antonio');
meuGrafo.adicionarAresta('Helena', 'Candida');
meuGrafo.adicionarAresta('Helena', 'Joao');

meuGrafo.imprimirGrafo();