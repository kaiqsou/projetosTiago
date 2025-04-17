class Fila 
{
    constructor()
    {
        this.items = {};
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(elemento)
    {
        this.items[this.fim] = elemento;
        this.fim++;
    }

    dequeue()
    {
        if (this.isEmpty()) 
        {
            return undefined;
        }

        const item = this.items[this.inicio];
        delete this.items[this.inicio];
        this.inicio++;

        if (this.inicio === this.fim)
        {
            this.inicio = 0;
            this.fim = 0;
        }

        return item;
    }

    peek()
    {
        if (this.isEmpty())
        {
            return undefined;
        }

        return this.items[this.inicio];
    }

    isEmpty()
    {
        return this.fim === this.inicio;
    }

    size()
    {
        return this.fim - this.inicio;
    }

    clear()
    {
        this.items = {};
        this.inicio = 0;
        this.fim = 0;
    }

    front()
    {
        if (this.isEmpty())
        {
            return undefined;
        }

        return this.items[this.inicio];
    }

    back()
    {
        if (this.isEmpty())
        {
            return undefined;
        }

        return this.items[this.fim-1];
    }
}

/*

Clientes fazem pedidos num drive-thru. Crie uma fila que registra os pedidos por
nome e imprima a sequência de atendimento.
Extra: calcule tempo total de espera se cada atendimento dura 2 minutos

*/

const pedidos = new Fila();
pedidos.enqueue("Kaique");
console.log("Primeiro pedido: " + pedidos.back());
pedidos.enqueue("Marina");
console.log("Segundo pedido: " + pedidos.back());
pedidos.enqueue("Tamires");
console.log("Terceiro pedido: " + pedidos.back());

let tempoPorPedido = 2; // em minutos
let total = 0;

while(!pedidos.isEmpty())
{
    let pedidoAtendido = pedidos.dequeue();
    total += tempoPorPedido;
    console.log(`${pedidoAtendido} atendido(a). Tempo acumulado: ${total} minutos`);
}

