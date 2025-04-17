/* Implemente uma variação da fila onde clientes com mais de 60 anos passam na
frente. (Dica: fazer com duas filas e intercalar atendimento.) */

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

    isEmpty()
    {
        return this.fim === this.inicio;
    }
}

const filaNormal = new Fila();
const filaPrioritaria = new Fila();

function enfileirar(nome, idade)
{
    if (idade >= 60)
    {
        return filaPrioritaria.enqueue(nome);
    }
    else
    {
        return filaNormal.enqueue(nome);
    }
}

function atender()
{
    if (!filaPrioritaria.isEmpty())
    {
        return filaPrioritaria.dequeue();
    }
    else
    {
        return filaNormal.dequeue();
    }
}

enfileirar("Marina", 20);
enfileirar("Seu João", 86);
enfileirar("Kaique", 21);
enfileirar("Tiago", 72);

while(!filaNormal.isEmpty() || !filaPrioritaria.isEmpty())
{
    console.log("Atendendo: " + atender())
}


