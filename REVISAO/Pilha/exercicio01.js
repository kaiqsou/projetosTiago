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
/*
    invert()
    {
        if (this.tamanho === 0)
        {
            return undefined;
        }

        let i = 0;
        let valorSalvo = 0;
        for (i= 0; i < this.tamanho; i++)
        {
            valorSalvo = this.elemento[this.tamanho];
            this.elemento[this.tamanho] = this.elemento[this.tamanho];
            this.elemento[this.tamanho] = valorSalvo;
        }
    }
*/
}

/*

Um mágico embaralha 5 cartas com os valores A, B, C, D, E e as empilha. Peça aos
alunos para simular o processo de colocar as cartas na pilha (push) e depois revelar
a ordem em que saem (pop), mostrando que o último a entrar é o primeiro a sair
(LIFO).
Desafio extra: inverter a ordem da pilha usando uma segunda pilha.

*/

let cartas = new cartasDeck();
console.log("Embaralhando...");
cartas.push("B");
cartas.push("C");
cartas.push("D");
cartas.push("A");
cartas.push("E");
console.log("Carta removida: " + cartas.pop());

let cartasInversas = new cartasDeck();
console.log("Invertendo...");
cartasInversas.push("E");
cartasInversas.push("A");
cartasInversas.push("D");
cartasInversas.push("C");
cartasInversas.push("B");
console.log("Carta removida: " + cartasInversas.pop());