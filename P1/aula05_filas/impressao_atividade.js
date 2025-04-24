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

    front()
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
}

class Documento
{
    constructor(nome,paginas)
    {
        this.nome = nome;
        this.paginas = paginas;
    }
}

const filaImpressao = new Fila();

filaImpressao.enqueue(new Documento("Relatório", 5));
filaImpressao.enqueue(new Documento("TCC", 5));
filaImpressao.enqueue(new Documento("Contrato", 5));

// enquanto a fila não estiver vazia, imprima os documentos
while (!filaImpressao.isEmpty())
{
    let doc = filaImpressao.dequeue();
    console.log(`Imprimindo ${doc.nome} (${doc.paginas} páginas)...`)
}