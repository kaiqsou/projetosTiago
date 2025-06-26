/*
Exercício 9: Quando a Interpolação Falha
Um exemplo de array problemático é [1, 2, 3, 4, 5, 1000].

A busca por interpolação funciona bem quando os valores crescem de forma linear e previsível. A fórmula pos = inicio + Math.floor(((valorProcurado - arr[inicio]) * (fim - inicio)) / (arr[fim] - arr[inicio])) usa a diferença entre o maior e o menor valor do intervalo para "adivinhar" a posição. No array de exemplo, o valor arr[fim] (1000) é desproporcionalmente grande, o que faz com que a fórmula sempre estime uma posição muito próxima do início para qualquer valor pequeno (como 4 ou 5), resultando em um desempenho próximo ao da busca sequencial (O(n)).

*/
const Buscas = require('../Classes/Buscas.js');

// Um array ordenado, mas com valores não uniformemente distribuídos
const arrRuim = [1, 2, 3, 4, 5, 1000];
const valor = 5;

// A busca vai funcionar, mas será ineficiente
const indice = Buscas.interpolacao(arrRuim, valor);

console.log(`Array: [${arrRuim}]`);
console.log(`Buscando pelo valor ${valor}, encontrado no índice ${indice}.`);
console.log(`
Explicação: A fórmula de interpolação estima a posição de um valor.
Como existe um salto gigante de 5 para 1000, a fórmula sempre vai estimar que
o valor '5' está muito próximo do início do array (índice 0 ou 1).
Isso a força a avançar quase que de um em um, tornando-a tão lenta
quanto uma busca sequencial neste caso.`);