/*

Considere todas as estruturas de dados estudadas até hoje e faça um benchmark para avaliar o desempenho delas. Abaixo
estão as intruções de metodologia:

a) Cada estrutura deverá ter 10 mil elementos
b) Teste a velocidade de inserção
c) Teste a velocidade de listagem
d) Teste a velocidade de remoção
e) Organize os dados em uma planilha e apresente suas conclusões de qual melhor caso de uso para cada estrutura de dados

*/


// Importando as classes necessárias para o benchmark
const BinaryTree = require('./BinaryTree.js');
const LinkedList = require('../../P1/aula06_linkedlist/linkedlist.js');
const DoublyLinkedList = require('../../P1/aula07_duplamente_encadeada/doublylinkedlist.js');
const Fila = require('../../P1/aula05_filas/filas.js');
const Pilha = require('../../P1/aula04_pilhas/pilhas.js');

// Instanciando as classes
const tree = new BinaryTree();
const list = new LinkedList();
const doublyList = new DoublyLinkedList();
const queue = new Fila();
const stack = new Pilha();

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tamanho do teste
const size = 1000000;

// Testando a Fila
console.time("timerFila");
for (let i = 0; i < size; i++) 
{
    queue.enqueue(getRandomIntRange(i, size));
}
console.timeEnd("timerFila");


// Testando a Pilha
console.time("timerPilha");
for (let i = 0; i < size; i++) 
{
    stack.adicionar(getRandomIntRange(i, size));
}
console.timeEnd("timerPilha");



// Testando a LinkedList
console.time("timerLinkedList");
for (let i = 0; i < size; i++) 
{
    list.insertAtBeginning(getRandomIntRange(i, size));
}
console.timeEnd("timerLinkedList");


// Testando a DoublyLinkedList
console.time("timerDoublyLinkedList");
for (let i = 0; i < size; i++) 
{
    doublyList.append(getRandomIntRange(i, size));
}
console.timeEnd("timerDoublyLinkedList");


// Testando a BinaryTree
console.time("timerBinaryTree");
for (let i = 0; i < size; i++) 
{
    tree.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerBinaryTree");