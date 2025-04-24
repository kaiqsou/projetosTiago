/* 
Módulos espaciais pousam um sobre o outro. O último a pousar é o primeiro a sair
da base. Simule essa sequência com uma pilha e peça para exibir a ordem de
retorno à nave.
*/

class Modulos
{
    constructor()
    {
        this.modulos = [];
        this.ordem = 0;
    }

    push(elemento)
    {
        this.modulos[this.ordem] = elemento;
        this.ordem++;
    }

    pop()
    {
        if (this.ordem === 0)
        {
            return undefined;
        }

        const ultimoModulo = this.modulos[this.ordem - 1];
        delete this.modulos[this.ordem - 1];
        this.ordem--;

        return ultimoModulo;
    }

    top()
    {
        if (this.ordem === 0) 
        {
            return undefined;
        }
        return this.modulos[this.ordem - 1];
    }
}

let pousada = new Modulos();

pousada.push("Módulo Alpha");
pousada.push("Módulo Beta");
pousada.push("Módulo Gama");
console.log("Retornando... " + pousada.pop());
console.log("Retornando... " + pousada.pop());
console.log("Retornando... " + pousada.pop());