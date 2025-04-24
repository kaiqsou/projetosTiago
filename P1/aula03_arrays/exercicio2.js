class MeuArray{

    constructor()
    {
        this.items = {};
        this.tamanho = 0;
    }

    adicionar(elemento)
    {
        this.items[this.tamanho] = elemento;
        this.tamanho++;
    }

    remover()
    {
        if (this.tamanho === 0) 
        {
            return undefined;
        }

        const ultimoItem = this.items[this.tamanho - 1];
        delete this.items[this.tamanho - 1];
        this.tamanho--;

        return ultimoItem;
    }

    obterElemento(indice)
    {
        if (indice < 0 || indice >= this.tamanho) {
            return undefined;
        }
        return this.items[indice];
    }

    tamanhoArray()
    {
        return this.tamanho;
    }

    limpar()
    {
        this.items = {};
        this.tamanho = 0;
    }
}

/*

O setor de Recursos Humanos de uma empresa deseja armazenar os nomes dos funcionários que participaram de um treinamento.

REQUISITOS
- Criar uma instancia da classe MeuArray
- Adicionar os nomes de quatro funcionarios ao array
- Obter o nome do terceiro funcionario que participou
- Limpar todos os registros do array

PERGUNTAS
- O que acontece se tentarmos acessar um indice inexistente apos limpar o array?
- Como modificar a classe para garantir que os nomes armazenados sejam unicos?

*/

let funcionarios = new MeuArray();

funcionarios.adicionar("Kaique");
funcionarios.adicionar("Marina");
funcionarios.adicionar("Tamires");
funcionarios.adicionar("Yasmin");

console.log("Tamanho do array: " + funcionarios.tamanhoArray());
console.log("3º funcionário(a): " + funcionarios.obterElemento(2));
console.log("Limpando registro...");
funcionarios.limpar()
console.log("Tamanho do array após a limpeza: " + funcionarios.tamanhoArray());
