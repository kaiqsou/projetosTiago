/*

Exercício 14: Complexidade dos Métodos de Ordenação
bubbleSort(): O(n²). Devido aos laços aninhados que comparam os elementos.
quickSort(): Pior caso é O(n²). O caso médio é O(n log n). O pior caso ocorre quando o pivô escolhido é consistentemente o menor ou o maior elemento (ex: um array já ordenado), o que cria partições desbalanceadas e degenera o algoritmo.
mergeSort(): O(n log n) em todos os casos (pior, médio e melhor). Sua performance é consistente porque ele sempre divide o array em duas metades iguais.

/*


* Análise de complexidade de tempo (Big O) dos métodos em `Sorter.js`.
*
* - bubbleSort(): O(n²)
* Justificativa: Possui dois laços aninhados (for dentro de for), resultando em uma
* complexidade quadrática no pior caso e no caso médio.
*
* - quickSort(): Pior caso O(n²) | Caso médio O(n log n)
* Justificativa: O pior caso (O(n²)) ocorre quando o pivô escolhido é
* sempre o menor ou maior elemento (ex: array já ordenado), o que
* cria partições desbalanceadas (uma com 0 e outra com n-1 elementos).
* No caso médio, as partições são balanceadas, levando a O(n log n).
*
* - mergeSort(): O(n log n)
* Justificativa: Sua performance é consistente em todos os casos (pior,
* médio e melhor), pois sempre divide o array em duas metades,
* garantindo uma complexidade de O(n log n).


*/