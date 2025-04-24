class cartasDeck
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

Um mágico embaralha 5 cartas com os valores A, B, C, D, E e as empilha. Peça aos
alunos para simular o processo de colocar as cartas na pilha (push) e depois revelar
a ordem em que saem (pop), mostrando que o último a entrar é o primeiro a sair
(LIFO).
Desafio extra: inverter a ordem da pilha usando uma segunda pilha.

*/

// usar stack ou estoque, em caso de stack: especificar stack.cartas depois no valor
let stack = new cartasDeck();
let estoque = [];
let cartas = ['A', 'B', 'C', 'D', 'E'];

// empilhando
for (let carta of cartas)
{
    stack.push(carta);
}
console.log("Piha completa: " + stack.cartas);

// desempilhando
while (stack.tamanho > 0)
{
    console.log("Retirando carta: " + stack.pop());
}
