// para iniciar: node nome_do_arquivo

class MeuArray{

    constructor()   // é executado quando uma classe recebe NEW 'let x = new MeuArray()'
    {
        this.items = {};    // usamos um objeto para armazenar os itens do array
        this.tamanho = 0;   // mantemos o controle do tamanho do array
    }

    // adiciona um elemento ao final do array
    adicionar(elemento){
        this.items[this.tamanho] = elemento;    // insere o elemento na posição atual do tamanho
        this.tamanho++;     // incrementa o tamanho
    }

    // remove o ultimo elemento do array
    remover()
    {
        if (this.tamanho === 0) 
        {
            return undefined;       // se o array estiver vazio, não há o que remover
        }

        const ultimoItem = this.items[this.tamanho - 1];    // armazena o ultimo item
        delete this.items[this.tamanho - 1];    // remove o último item do array
        this.tamanho--;         // decrementa o tamanho

        return ultimoItem;      // retorna o item removido
    }

    // acessa o elemento em um índice específico
    obterElemento(indice)
    {
        if (indice < 0 || indice >= this.tamanho) {
            return undefined;       // se o índice estiver fora do alcance, retorna undefined
        }
        return this.items[indice];  // retorna o item no indice solicitado 
    }

    // retorna o tamanho do array
    tamanhoArray()
    {
        return this.tamanho;    // retorna o valor do tamanho atual do array
    }

    // remove todos os elementos do array
    limpar()
    {
        this.items = {};   // limpa o objeto
        this.tamanho = 0;  // reinicializa o tamanho
    }
}

// exemplo de uso
let minha_variavel = new MeuArray();

minha_variavel.adicionar(10);
minha_variavel.adicionar(20);
minha_variavel.adicionar(30);

console.log(minha_variavel.obterElemento(1));   // Saída: 20
console.log(minha_variavel.tamanhoArray());   // Saída: 3

console.log(minha_variavel.remover());   // Saída: 30 (remove o último elemento)
console.log(minha_variavel.tamanhoArray());   // Saída: 2 */

   

