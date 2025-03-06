class MinhaPilha {

    constructor()
    {
        this.items = {};
        this.tamanho = 0;
    }

    adicionar(elemento)
    {
        this.items[this.tamanho] = elemento;            // insere o elemento na posição atual do tamanho
        this.tamanho++;                                 // incrementa
    }

    remover()
    {
        if (this.tamanho === 0)         // se a pilha estiver vazia, retorna undefined
        {
            return undefined;
        }

        const ultimoItem = this.items[this.tamanho - 1];        // pega o item no topo da pilha
        delete this.items[this.tamanho - 1];                    // remove o item
        this.tamanho--;                                         // decrementa

        return ultimoItem; 
    }

    // retornao elemento no topo da pilha sem removê-lo
    topo()
    {
        if (this.tamanho === 0) 
        {
            return undefined;       // se a pilha estiver vazia, retorna undefined
        }
        return this.items[this.tamanho - 1];
    }

    estaVazia()
    {
        return this.tamanho === 0;
    }

    // retorna o numero de elementos na pilha
    tamanhoPilha()
    {
        return this.tamanho;
    }

    limpar()
    {
        this.items = {};
        this.tamanho = 0;
    }
}

// exemplo de uso
let variavel = new MinhaPilha();
variavel.adicionar(10);
variavel.adicionar(20);
variavel.adicionar(30);

console.log(variavel.topo());   // Saída: 30 (elemento no topo)
console.log(variavel.remover());   // Saída: 30 (remove o elemento no topo)
console.log(variavel.topo());   // Saída: 20 (agora o topo é 20)
console.log(variavel.tamanhoPilha());   // Saída: 2 (dois elementos restantes)



