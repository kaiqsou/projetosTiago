/* 
Módulos espaciais pousam um sobre o outro. O último a pousar é o primeiro a sair
da base. Simule essa sequência com uma pilha e peça para exibir a ordem de
retorno à nave.
*/

class Naves
{
    constructor()
    {
        this.naves = [];
        this.ordem = 0;
    }

    push(elemento)
    {
        this.naves[this.ordem] = elemento;
        this.ordem++;
    }

    pop()
    {
        if (this.ordem === 0)
        {
            return undefined;
        }

        const ultimaNave = this.naves[this.ordem - 1];
        delete this.naves[this.ordem - 1];
        this.ordem--;

        return ultimaNave;
    }

    topo()
    {
        if (this.ordem === 0) 
        {
            return undefined;
        }
        return this.naves[this.ordem - 1];
    }
}

let pousada = new Naves();

pousada.push("Nave 1");
pousada.push("Nave 2");
pousada.push("Nave 3");
console.log("A próxima nave a sair será... " + pousada.topo());
pousada.pop();
console.log("A próxima nave a sair será... " + pousada.topo());
pousada.pop();
console.log("A próxima nave a sair será... " + pousada.topo());