class GrafoPonderado {
    constructor() {
        this.vertices = new Set();
        this.adjacencia = new Map();
    }
    adicionarVertice(v) {
        this.vertices.add(v);
        if(!this.adjacencia.has(v)){
            this.adjacencia.set(v, []);
        }
    }
    adicionarAresta(origem, destino, peso) {
        if (!this.adjacencia.has(origem)) this.adicionarVertice(origem);
        if (!this.adjacencia.has(destino)) this.adicionarVertice(destino);
        this.adjacencia.get(origem).push({ vertice: destino, peso});
    }
    imprimirGrafo() {
        for (const [v, vizinhos] of this.adjacencia.entries()) {
            const lista = vizinhos.map(obj => `${obj.vertice}(${obj.peso})`).join(', ');
            console.log(`${v} -> ${lista}`)
        }
    }
    imprimirMatrizAdjacencia() {
        const vertices = Array.from(this.vertices);
        const n = vertices.length;
        const matriz = Array.from({ length: n }, () => Array(n).fill(Infinity));

        vertices.forEach((v, i) => {
            matriz[i][i] = 0;
            for (const vizinho of this.adjacencia.get(v)) {
                const j = vertices.indexOf(vizinho.vertice);
                matriz[i][j] = vizinho.peso;
            }
        })
        console.log('Matriz de Adjacência (valores ∞ representam ausência de aresta):');
        console.log(' ', vertices.join('   '));
        matriz.forEach((linha, i) => {
            console.log(vertices[i], linha.map(x => x === Infinity ? '∞' : x).join('   '));
        });
    }
    dfs(inicio) 
    {
        const visitados = new Set();
        const resultado = [];

        const visitar = (v) => {
            visitados.add(v);
            resultado.push(v);

            for (const vizinho of this.adjacencia.get(v)) {
                if (!visitados.has(vizinho.vertice)){
                    visitar(vizinho.vertice);
                }
            }
        }

        visitar(inicio);
        console.log('DFS:', resultado.join(' -> '));
    }
    
    bfs(inicio) {
        const visitados = new Set();
        const fila = [inicio];
        const resultado = [];

        visitados.add(inicio);

        while (fila.length > 0) {
            const atual = fila.shift();
            resultado.push(atual);

            for (const vizinho of this.adjacencia.get(atual)){
                if(!visitados.has(vizinho.vertice)) {
                    visitados.add(vizinho.vertice);
                    fila.push(vizinho.vertice);
                }
            }
        }

        console.log('BFS:', resultado.join(' -> '));
    }
    dijkstra(inicio) {
        const distancias = {};
        const anteriores = {};
        const naoVisitados = new Set(this.vertices);

        for (const v of this.vertices) {
            distancias[v] = Infinity;
            anteriores[v] = null;
        }
        distancias[inicio] = 0;

        while (naoVisitados.size > 0) {
            const atual = [...naoVisitados].reduce((a, b) =>
                distancias[a] < distancias[b] ? a : b
            );
            naoVisitados.delete(atual);

            for (const vizinho of this.adjacencia.get(atual)) {
                const alt = distancias[atual] + vizinho.peso;
                if (alt < distancias[vizinho.vertice]) {
                    distancias[vizinho.vertice] = alt;
                    anteriores[vizinho.vertice] = atual;
                }
            }
        }

        console.log(`Menores distâncias a partir de ${inicio}:`);
        for (const v of this.vertices) {
            console.log(`${v}: ${distancias[v]}`);
        }
    }
}

module.exports = GrafoPonderado;