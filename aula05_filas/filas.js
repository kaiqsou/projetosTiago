class Fila 
{
    constructor()
    {
        this.items = {};    // usamos objeto para armazenar os itens
        this.inicio = 0;    // representa o índice do inicio da fila
        this.fim = 0;       // representa o índice do fim da fila
    }

    // adiciona um elemento no final da fila
    enqueue(elemento)
    {
        this.items[this.fim] = elemento;    // coloca o elemento no fim da fila
        this.fim++;                         // incrementa
    }

    // remove o último elemento e retorna o primeiro elemento elemento da fila
    dequeue()
    {
        if (this.isEmpty()) 
        {
            return undefined;        // se estiver vazio, retorna undefined
        }

        const item = this.items[this.inicio];   // obtém o primeiro elemento
        delete this.items[this.inicio];         // remove o item do inicio da fila
        this.inicio++;                          // move o indice do inicio para o proximo item

        // quando o início e o fim estiverem alinhados, redefine a fila
        if (this.inicio === this.fim)
        {
            this.inicio = 0;
            this.fim = 0;
        }

        return item;    // retorna o item removido
    }

    // retorna o primeiro elemento da fila sem removê-lo (peek)
    front()
    {
        if (this.isEmpty())
        {
            return undefined;   // se estiver vazia a fila, retorna undefined
        }

        return this.items[this.inicio];   // retorna o primeiro elemento
    }

    // verifica se está vazia
    isEmpty()
    {
        return this.fim === this.inicio;    // verifica se os indices sao iguais
    }

    // retorna o tamanho da fila
    size()
    {
        return this.fim - this.inicio;      // calcula a diferença entre fim e inicio
    }

    // limpa a fila
    clear()
    {
        this.items = {};
        this.inicio = 0;
        this.fim = 0;
    }
}

// exemplo de uso
let minha_variavel = new Fila();

minha_variavel.enqueue("Cliente 1");
minha_variavel.enqueue("Cliente 2");
minha_variavel.enqueue("Cliente 3");

console.log(minha_variavel.front());    // Saída: "Cliente 1"

console.log(minha_variavel.dequeue());  // Saída: "Cliente 1", ele será removido
console.log(minha_variavel.dequeue());  // Saída: "Cliente 2", ele será removido

minha_variavel.enqueue("Cliente 4");

console.log(minha_variavel.size());    // Saída: 2 (Cliente 3 e Cliente 4 ainda estão na fila)
console.log(minha_variavel.front());   // Saída: "Cliente 3"