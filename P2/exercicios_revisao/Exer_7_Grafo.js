/*
Exercício 7: Grafos Ponderados (Conceitual)
Para suportar pesos, a modificação principal seria na estrutura da lista de adjacência e no método de adicionar arestas.

Estrutura adjacencia: Em vez de a lista conter apenas strings (['Beto', 'Caio']), ela conteria objetos, cada um com o vértice e seu peso. Ex: [{ vertice: 'Beto', peso: 5 }, { vertice: 'Caio', peso: 3 }].
Método adicionarAresta: A assinatura do método mudaria para adicionarAresta(vertice1, vertice2, peso). A implementação faria um push do objeto { vertice: vertice2, peso: peso } na lista de vertice1, e vice-versa.
*/

/*
* Para transformar o Grafo em um grafo ponderado, precisaríamos
* alterar a estrutura da lista de adjacência e o método de adicionar arestas.
* Não usaríamos um array de strings, mas sim um array de objetos.
*/

class GrafoPonderado 
{
    constructor() {
        // Ex: { 'A': [{ vertice: 'B', peso: 10 }] }
        this.adjacencia = {};
    }

    adicionarVertice(vertice) {
        if (!this.adjacencia[vertice]) {
            this.adjacencia[vertice] = [];
        }
    }

    // O método agora aceita um terceiro parâmetro: o peso.
    adicionarAresta(vertice1, vertice2, peso) {
        this.adicionarVertice(vertice1);
        this.adicionarVertice(vertice2);

        // Adiciona um objeto contendo o vértice e o peso.
        this.adjacencia[vertice1].push({ vertice: vertice2, peso: peso });
        this.adjacencia[vertice2].push({ vertice: vertice1, peso: peso });
    }

    imprimirGrafo() {
        for (let vertice in this.adjacencia) {
            const vizinhos = this.adjacencia[vertice].map(
                v => `${v.vertice}(${v.peso})`
            ).join(', ');
            console.log(`${vertice} -> ${vizinhos}`);
        }
    }
}

// Exemplo de uso:
const mapa = new GrafoPonderado();
mapa.adicionarAresta('Cidade A', 'Cidade B', 150);
mapa.adicionarAresta('Cidade A', 'Cidade C', 200);
mapa.imprimirGrafo();