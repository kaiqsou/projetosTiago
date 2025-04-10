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

const clientes = new Fila();
clientes.enqueue("Kaique");
console.log("Primeiro a ser atendido: " + clientes.back());
clientes.enqueue("Marina");
console.log("Segundo a ser atendido: " + clientes.back());
clientes.enqueue("Tamires");
console.log("Terceiro a ser atendido: " + clientes.back());

setTimeout(
    function()
    {
        console.log("Atendimento finalizado de: " + clientes.front());
        clientes.dequeue(clientes.front());
    }, 120000
)

setTimeout(
    function()
    {
        console.log("Atendimento finalizado de: " + clientes.front());
        clientes.dequeue(clientes.front());
    }, 120000
)

setTimeout(
    function()
    {
        console.log("Atendimento finalizado de: " + clientes.front());
        clientes.dequeue(clientes.front());
    }, 120000
)
