class Grafo 
{
    constructor() 
    {
        // Estrutura para armazenar os vértices e suas conexões
        this.adjacencia = {};
    }

    // adiciona um novo vértice ao grafo
    adicionarVertice(vertice) 
    {
        if (!this.adjacencia[vertice])
        {
            this.adjacencia[vertice] = [];
        }
    }

    // adiciona uma aresta entre dois vértices (não dirigido)
    adicionarAresta(vertice1, vertice2)
    {
        if (!this.adjacencia[vertice1])
        {
            this.adicionarVertice(vertice1);
        }

        if (!this.adjacencia[vertice2])
        {
            this.adicionarVertice(vertice2);
        }

        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    // adiciona uma aresta entre dois vértices com peso (não dirigido)
    adicionarArestaComPeso(vertice1, vertice2, peso)
    {
        if (!this.adjacencia[vertice1])
        {
            this.adicionarVertice(vertice1);
        }

        if (!this.adjacencia[vertice2])
        {
            this.adicionarVertice(vertice2);
        }

        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    // remove uma aresta entre dois vértices
    removerAresta(vertice1, vertice2)
    {
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);  
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);  
    }

    // remove um vértice e suas conexões
    removerVertice(vertice)
    {
        while (this.adjacencia[vertice]?.length)
        {
            const adjacente = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacente);
        }

        delete this.adjacencia[vertice];
    }

    // exibe o Grafo
    imprimirGrafo()
    {
        for (let vertice in this.adjacencia)
        {
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
        }
    }

    vizinhosDoVertice(vertice) 
    {
        if (!this.adjacencia[vertice]) {
            console.log(`O vértice ${vertice} não existe no grafo.`);
            return [];
        }
        console.log(`Vizinhos de ${vertice}: ${this.adjacencia[vertice].join(', ')}`);
        return this.adjacencia[vertice]; 
    }

}   // fecha a classe Grafo

module.exports = Grafo;