class Buscas 
{
    // Busca sequencial — percorre o array elemento por elemento até encontrar o valor
    static sequencial(arr, valorProcurado)
    {
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[i] === valorProcurado)
            {
                return i; // retorna a posição onde encontrou
            }
        }
        return -1; // valor não encontrado
    }

    // Busca binária — eficiente, mas exige array ORDENADO
    static binaria(arr, valorProcurado)
    {
        let inicio = 0;
        let fim = arr.length - 1;

        while (inicio <= fim)
        {
            let meio = Math.floor((inicio + fim) / 2);

            if (arr[meio] === valorProcurado)
            {
                return meio; // encontrou o valor no meio
            }
            else if (arr[meio] < valorProcurado)
            {
                inicio = meio + 1; // procura na metade direita
            }
            else 
            {
                fim = meio - 1; // procura na metade esquerda
            }
        }

        return -1; // valor não encontrado
    }

    // Busca por interpolação — assume distribuição uniforme e array ORDENADO
    static interpolacao(arr, valorProcurado)
    {
        let inicio = 0;
        let fim = arr.length - 1;

        // Enquanto a faixa for válida e o valor estiver dentro dos extremos
        while (
            inicio <= fim &&
            valorProcurado >= arr[inicio] &&
            valorProcurado <= arr[fim]
        ) {
            if (inicio === fim)
            {
                return arr[inicio] === valorProcurado ? inicio : -1;
            }

            // Calcula a posição estimada (posição interpolada)
            const pos = inicio + Math.floor(
                ((valorProcurado - arr[inicio]) * (fim - inicio)) /
                (arr[fim] - arr[inicio])
            );

            if (arr[pos] === valorProcurado)
            {
                return pos; // valor encontrado na posição estimada
            }

            if (arr[pos] < valorProcurado)
            {
                inicio = pos + 1; // busca na parte superior
            }
            else
            {
                fim = pos - 1; // busca na parte inferior
            }
        }

        return -1; // valor não encontrado
    }
}

module.exports = Buscas;