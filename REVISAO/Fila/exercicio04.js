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

Crianças entram na fila da montanha-russa. Cada criança leva x segundos para
brincar. Simule a entrada (enqueue) e atendimento (dequeue), imprimindo quem
está sendo atendido e o tempo restante.

*/

const criancas = new Fila();

criancas.enqueue("Kaique");
console.log("Entrou na fila: " + criancas.back())
criancas.enqueue("Marina");
console.log("Entrou na fila: " + criancas.back())
criancas.enqueue("Cássia");
console.log("Entrou na fila: " + criancas.back())
criancas.enqueue("Yasmin");
console.log("Entrou na fila: " + criancas.back())
criancas.enqueue("Tamires");
console.log("Entrou na fila: " + criancas.back())

setTimeout(
    function()
    {
        console.log("Terminou de brincar: " + criancas.front());
        criancas.dequeue(criancas.front());
    }, 3000);

setTimeout(
    function()
    {
        console.log("Terminou de brincar: " + criancas.front());
        criancas.dequeue(criancas.front());
    }, 6000);

setTimeout(
    function()
    {
        console.log("Terminou de brincar: " + criancas.front());
        criancas.dequeue(criancas.front());
    }, 9000);

setTimeout(
    function()
    {
        console.log("Terminou de brincar: " + criancas.front());
        criancas.dequeue(criancas.front());
    }, 12000);

setTimeout(
    function()
    {
        console.log("Terminou de brincar: " + criancas.front());
        criancas.dequeue(criancas.front());
    }, 15000);

