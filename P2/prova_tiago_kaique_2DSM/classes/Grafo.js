// Classe que representa um grafo não direcionado usando lista de adjacência
class Grafo 
{
    constructor() 
    {
        // Objeto onde as chaves são vértices e os valores são arrays de vértices adjacentes
        this.adjacencia = {};
    }

    // Adiciona um vértice ao grafo, caso não exista ainda
    adicionarVertice(vertice) 
    {
        if (!this.adjacencia[vertice]) // verifica se vértice já existe
        {
            this.adjacencia[vertice] = []; // cria a lista de adjacência vazia
        }
    }

    // Adiciona uma aresta entre vertice1 e vertice2 (grafo não direcionado)
    adicionarAresta(vertice1, vertice2) 
    {
        this.adicionarVertice(vertice1); // garante que vertice1 existe
        this.adicionarVertice(vertice2); // garante que vertice2 existe

        this.adjacencia[vertice1].push(vertice2); // adiciona vertice2 na lista de vertice1
        this.adjacencia[vertice2].push(vertice1); // adiciona vertice1 na lista de vertice2
    }

    // Remove a aresta entre vertice1 e vertice2, se existir
    removerAresta(vertice1, vertice2) 
    {
        // remove vertice2 da lista de vertice1
        if (this.adjacencia[vertice1]) 
        {
            this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);
        }
        // remove vertice1 da lista de vertice2
        if (this.adjacencia[vertice2]) 
        {
            this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);
        }
    }

    // Remove o vértice e todas as suas arestas associadas
    removerVertice(vertice) 
    {
        if (this.adjacencia[vertice]) 
        {
            // remove todas as arestas conectadas a este vértice
            while (this.adjacencia[vertice].length) 
            {
                const adjacente = this.adjacencia[vertice].pop();
                this.removerAresta(vertice, adjacente);
            }
            // remove o vértice do objeto adjacencia
            delete this.adjacencia[vertice];
        }
    }

    // Exibe a lista de adjacência do grafo no console
    imprimirGrafo() 
    {
        console.table(this.adjacencia); // exibe em formato de tabela
        for (let vertice in this.adjacencia) 
        {
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
        }
    }

    // Verifica se um vértice existe no grafo
    buscarVertice(valor) 
    {
        // retorna o valor se existir, senão null
        return this.adjacencia[valor] ? valor : null;
    }

    breadthFirstSearch(inicio, fim)
    {
        const visitados = new Set();
        const fila = [inicio];
        const resultado = [];

        visitados.add(inicio);

        while (fila.length > 0) 
        {
            const atual = fila.shift();
            resultado.push(atual);

            for (const vizinho of this.adjacencia.get(atual)){
                if(!visitados.has(vizinho.vertice)) {
                    visitados.add(vizinho.vertice);
                    fila.push(vizinho.vertice);
                }
            }
        return [inicio, fim]
        }
    }
}

module.exports = Grafo;
