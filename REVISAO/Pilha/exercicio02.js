class Editor
{
    constructor()
    {
        this.cartas = [];
        this.tamanho = 0;
    }

    push(elemento)
    {
        this.cartas[this.tamanho] = elemento;
        this.tamanho++;
    }

    pop()
    {
        if (this.tamanho === 0)
        {
            return undefined;
        }

        const ultimaCarta = this.cartas[this.tamanho - 1];
        delete this.cartas[this.tamanho - 1];
        this.tamanho--;

        return ultimaCarta;
    }
}

/*

Simule as funcionalidades de "Desfazer" e "Refazer" de um editor de texto com
duas pilhas: uma para as ações feitas, outra para as ações desfeitas.
Exemplo: Digitar "A", "B", "C", desfazer duas vezes, refazer uma vez.

*/
let acoesDesfeitas = new Editor();
let acoesRefeitas = new Editor();

console.log("Adicionando... A, B e C")
acoesDesfeitas.push("A");
acoesDesfeitas.push("B");
acoesDesfeitas.push("C");
console.log("Desfazendo de... " + acoesDesfeitas.pop());
console.log("Desfazendo de... " + acoesDesfeitas.pop());
acoesDesfeitas.push("B");