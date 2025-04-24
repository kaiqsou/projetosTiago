class Fila 
{
    constructor()
    {
        this.items = [];   
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
            console.log('aqui');
            return undefined;
        }

        return this.items[this.fim-1];
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

    
}

/*

Crie um sistema de atendimento onde clientes entram na fila e são atendidos na ordem de chegada. A cada iteração, um cliente
deve ser removido da fila e exibido no console. Novos clientes podem ser adicionados aleatoriamente.

Desafio extra: Simule diferentes tempos de atendimento para cada cliente, usando setTimeout().

*/

let clientes = new Fila();

setTimeout
(
    function()
    {
        clientes.enqueue("Kaique");
        console.log("Entrou na fila: " + clientes.back());
    }, 1000
);

setTimeout
(
    function()
    {
        clientes.enqueue("Marina");
        console.log("Entrou na fila: " + clientes.back());
    }, 2000
);

setTimeout
(
    function()
    {
        clientes.enqueue("Tamires");
        console.log("Entrou na fila: " + clientes.back());
    }, 3000
);

setTimeout
(
    function()
    {
        console.log("Saiu da fila: " + clientes.dequeue());
    }, 3000
);

setTimeout
(
    function()
    {
        clientes.enqueue("Yasmin");
        console.log("Entrou na fila: " + clientes.back());
    }, 4000
);

setTimeout
(
    function()
    {
        clientes.enqueue("Pedro");
        console.log("Entrou na fila: " + clientes.back());
    }, 5000
);

setTimeout
(
    function()
    {
        console.log("Saiu da fila: " + clientes.dequeue());
    }, 4500
);

setTimeout
(
    function()
    {
        clientes.enqueue("Cássia");
        console.log("Entrou na fila: " + clientes.back());
    }, 6000
);

setTimeout
(
    function()
    {
        console.log("Saiu da fila: " + clientes.dequeue());
    }, 6000
);

setTimeout
(
    function()
    {
        clientes.enqueue("Arthur");
        console.log("Entrou na fila: " + clientes.back());
    }, 7000
);

setTimeout
(
    function()
    {
        clientes.enqueue("Tiago");
        console.log("Entrou na fila: " + clientes.back());
    }, 8000
);

setTimeout
(
    function()
    {
        console.log("Saiu da fila: " + clientes.dequeue());
    }, 8000
);

setTimeout
(
    function()
    {
        console.log("Saiu da fila: " + clientes.dequeue());
    }, 10000
);

setTimeout
(
    function()
    {
        console.log("Estão na fila: " + clientes.size() + " pessoas.");
    }, 11000
);
