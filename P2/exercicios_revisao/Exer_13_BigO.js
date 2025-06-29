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


O(1) → tempo constante
Ex: Acessa diretamente o índice de um array.
arr[5] → só um passo, não importa o tamanho.

O(n) → linear
Um for simples percorrendo todos os elementos.
for (i = 0; i < n; i++)

O(n²) → quadrática
Um for dentro de outro for, comparando tudo com tudo.
for (i = 0; i < n; i++)
    for (j = 0; j < n; j++)
	
O(log n) → logarítmica
Vai cortando o problema pela metade a cada passo.
Ex: Busca binária.

O(n log n) → linear-logarítmica
Um for com uma operação logarítmica dentro.
Ex: Algoritmos de ordenação eficientes como Merge Sort ou Quick Sort.

O(2ⁿ) → exponencial
O número de passos dobra a cada novo elemento.
Ex: Resolver todos os subconjuntos possíveis (recursão pesada, como em problemas de Backtracking).

O(n!) → fatorial
Tenta todas as permutações possíveis.
Ex: Problemas como o Caixeiro Viajante (TSP), usando força bruta

O(n³) → cúbica
Três for aninhados.
Ex: Algoritmos que lidam com matrizes 3D ou grafos densos.

O(√n) → raiz quadrada
Útil em algoritmos como verificação de primos (trial division até √n).

O(n^k) → polinomial
k é uma constante maior que 1. Muito usado em problemas de complexidade média.

*/