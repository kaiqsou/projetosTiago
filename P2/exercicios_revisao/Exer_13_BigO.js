/*


Exercício 13: Complexidade dos Métodos de Busca
sequencial(): O(n). No pior caso, é preciso percorrer todo o array.
binaria(): O(log n). O espaço de busca é dividido pela metade a cada passo. Requer um array ordenado.
interpolacao(): Pior caso é O(n). Embora seu caso médio em dados uniformes seja O(log log n), ele degrada para O(n) quando os dados não são uniformemente distribuídos.

* Análise de complexidade de tempo (Big O) dos métodos em `Buscas.js`.
*
* - sequencial(): O(n)
* Justificativa: No pior caso (elemento no final ou inexistente), o algoritmo
* precisa percorrer todos os 'n' elementos do array.
*
* - binaria(): O(log n)
* Justificativa: A cada passo, o algoritmo descarta metade do array de busca.
* O número de passos cresce de forma logarítmica com o tamanho do array.
*
* - interpolacao(): Pior caso O(n) | Caso médio O(log log n)
* Justificativa: O pior caso (O(n)) ocorre quando os dados não são
* uniformemente distribuídos, forçando a busca a avançar lentamente. O caso
* médio em dados uniformes é extremamente rápido.


O(1) -> faz uma busca direta no array pelo índice
O(n) -> um for normal
O(n^2) -> um for dentro de um for
O(n log n)
O(2ⁿ)
*/