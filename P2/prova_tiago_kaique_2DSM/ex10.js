const AVLTree = require("./classes/AVLTree.js");
const Sorter = require("./classes/Sorter.js");

// Questão 10: Sistema de Indexação e Busca em Larga Escala

/* Simule e compare duas estratégias para um sistema que precisa processar um grande
volume de dados e depois realizar múltiplas buscas. */

// a) Gere um array com 1 milhão de números inteiros aleatórios (dados).
const dados = Array.from({length: 1000000}, () => Math.floor(Math.random() * 1000000));

/* b) Gere um segundo array com 1.000 números aleatórios para servirem como os
termos de busca (buscas). */
const buscas = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));
const ordenado = Sorter.quickSort(dados);

// c) Estratégia 1: Ordenação e Busca Binária 
// 1. Meça o tempo para ordenar o array dados usando Sorter.mergeSort. 
console.time('Merge Sort');
Sorter.mergeSort(dados)
console.timeEnd('Merge Sort');

/* 2. Em seguida, meça o tempo total para buscar cada um dos 1.000 elementos do array buscas dentro do array dados (já ordenado)
usando Buscas.binaria. */
console.time('Busca Binária de DADOS');
Sorter.quickSort(buscas);
dados.forEach(dados => arvoreAVL.search(dados));
console.timeEnd('Busca Binária de DADOS');

// d) Estratégia 2: Árvore AVL 
/* a. Meça o tempo para inserir todos os 1 milhão de elementos do array dados em uma AVLTree. 
console.time('Merge Sort'); */
const arvoreAVL = new AVLTree();

console.time('Inserindo DADOS na Árvore AVL');
dados.forEach(dados => arvoreAVL.insert(dados));
console.timeEnd('Inserindo DADOS na Árvore AVL');

/* b. Em seguida, meça o tempo total para buscar cada um dos 1.000 elementos do array buscas na AVLTree. 
(Nota: você precisará adicionar um método de busca na AVLTree. Pode adaptar o método search da BinaryTree). */

console.time('Procurando BUSCAS na Árvore AVL');
buscas.forEach(buscas => arvoreAVL.search(buscas));
console.timeEnd('Procurando BUSCAS na Árvore AVL');

/* e) Análise Final: Some os tempos de "preparação" e "busca" de cada estratégia. Qual
delas foi mais eficiente para o problema completo? Discuta os prós e contras de
cada abordagem. */

