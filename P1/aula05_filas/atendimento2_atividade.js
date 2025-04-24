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

const filaAtendimento = new Fila();

filaAtendimento.enqueue("Cliente 1");
filaAtendimento.enqueue("Cliente 2");
filaAtendimento.enqueue("Cliente 3");

while (!filaAtendimento.isEmpty()) {
    console.log(`Atendendo: ${filaAtendimento.dequeue()}`);
}