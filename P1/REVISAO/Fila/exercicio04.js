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

const fila = new Fila();

fila.enqueue("Kaique");
fila.enqueue("Marina");
fila.enqueue("Yasmin");

while (!fila.isEmpty())
{
    let tempo = Math.floor(Math.random() * 3000) + 1000;
    console.log(`Brincando: ${fila.dequeue()} por ${tempo}ms`);
}

/*

setTimeout(
    function()
    {
        console.log("Terminou de brincar: " + fila.front());
        fila.dequeue(fila.front());
    }, 3000);

*/
