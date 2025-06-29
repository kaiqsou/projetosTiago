class Sorter 
{
    // Bubble Sort: compara pares adjacentes e os troca se estiverem fora de ordem
    // Continua até não haver mais trocas
    static bubbleSort(arr)
    {
        const array = [...arr]; // cria uma cópia do array original para não modificá-lo
        let n = array.length;
        let trocou;

        do 
        {
            trocou = false;

            // percorre o array até o penúltimo elemento
            for (let i = 0; i < n - 1; i++)
            {
                // se o elemento atual for maior que o próximo, troca-os
                if (array[i] > array[i + 1])
                {
                    [array[i], array[i + 1]] = [array[i + 1], array[i]]; // destruturação para troca
                    trocou = true; // marca que houve uma troca
                }
            }
            n--; // otimização: após cada passada, o maior elemento está no final
        } while (trocou); // repete enquanto houver trocas

        return array; // retorna o array ordenado
    }

    // Quick Sort: algoritmo eficiente baseado em divisão e conquista
    static quickSort(arr)
    {
        // caso base: se tiver 0 ou 1 elemento, já está ordenado
        if (arr.length <= 1) return arr;

        const pivot = arr[arr.length - 1]; // escolhe o último elemento como pivô
        const menores = []; // elementos menores que o pivô
        const maiores = []; // elementos maiores ou iguais ao pivô

        // percorre o array, separando os elementos conforme o pivô
        for (let i = 0; i < arr.length - 1; i++)
        {
            if (arr[i] < pivot)
            {
                menores.push(arr[i]);
            }
            else
            {
                maiores.push(arr[i]);
            }
        }

        // recursivamente ordena as partes e concatena com o pivô no meio
        return [...Sorter.quickSort(menores), pivot, ...Sorter.quickSort(maiores)];
    }

    // Merge Sort: divide o array em duas metades, ordena recursivamente e depois une
    static mergeSort(arr)
    {
        // caso base
        if (arr.length <= 1) return arr;

        const meio = Math.floor(arr.length / 2); // encontra o meio do array
        const esquerda = Sorter.mergeSort(arr.slice(0, meio)); // divide a metade esquerda
        const direita = Sorter.mergeSort(arr.slice(meio)); // divide a metade direita

        // une as duas metades já ordenadas
        return Sorter.merge(esquerda, direita);
    }

    // Método auxiliar para mergeSort: combina dois arrays ordenados em um só
    static merge(esquerda, direita)
    {
        const resultado = [];
        let i = 0, j = 0; // índices de controle para esquerda e direita

        // enquanto houver elementos em ambas as listas
        while (i < esquerda.length && j < direita.length)
        {
            if (esquerda[i] < direita[j])
            {
                resultado.push(esquerda[i++]); // adiciona da esquerda e incrementa i
            }
            else 
            {
                resultado.push(direita[j++]); // adiciona da direita e incrementa j
            }
        }

        // adiciona os elementos restantes (se houver) de cada lado
        return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
    }
}

// Exporta a classe Sorter para que possa ser usada em outros arquivos/módulos
module.exports = Sorter;
