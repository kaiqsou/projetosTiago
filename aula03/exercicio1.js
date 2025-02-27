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

Uma empresa deseja criar um sistema simples para gerenciar as tarefas da equipe.
Cada tarefa será armazenada em um array utilizando a classe MeuArray.

REQUISITOS
- Criar uma instancia de classe MeuArray
- Adicionar cinco tarefas ao array
- Remover a última tarefa adicionada
- Exibir todas as tarefas armazenadas

PERGUNTAS
- O que acontece quando tentamos acessar um indice fora do tamanho do array?
- Como garantir que a ordem das tarefas seja mantida ao adicionar e remover itens?

*/

let tarefas = new MeuArray();

tarefas.adicionar("Responder e-mails");
tarefas.adicionar("Formatar computadores");
tarefas.adicionar("Resolver bugs do sistema");
tarefas.adicionar("Realizar pagamentos dos funcionários");
tarefas.adicionar("Revisar relatórios financeiros");

console.log("Tamanho: " + tarefas.tamanhoArray());   
console.log("Removendo a tarefa de... " + tarefas.remover());   

for(i = 0; i < tarefas.tamanhoArray(); i++){
    console.log("Tarefa " + (i+1) + ": " + tarefas.obterElemento(i));
}

