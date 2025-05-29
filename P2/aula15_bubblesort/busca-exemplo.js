const Buscas = require('./Buscas.js');

const dados = [10, 20, 30, 40, 50, 60];

console.log("Sequencial:", Buscas.sequencial(dados, 40)); // 3
console.log("Binária:", Buscas.binaria(dados, 40)); // 3
console.log("Interpolação:", Buscas.interpolacao(dados, 40)); // 3