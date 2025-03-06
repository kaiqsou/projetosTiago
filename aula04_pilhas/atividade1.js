class SpellStack {

    constructor()
    {
        this.spells = [];
        this.lenght = 0;
    }

    addSpell(spell)
    {
        this.spells[this.lenght] = spell;            
        this.lenght++;                               
    }

    removeSpell()
    {
        if (this.isEmpty()) 
        {
            console.log("Nenhum feitiço na torre!");
            return;
        }

        console.log(`Feitiço "${this.spells.pop()}" removido!`);

    }

    seekSpell()
    {
        if (this.isEmpty()) 
        {
            console.log("Nenhum feitiço para ver!");
            return;
        }
        console.log(`Feitiço no topo: "${this.spells[this.lenght - 1]}"`);
    }

    isEmpty()
    {
        return this.lenght === 0;
    }

    stackSize()
    {
        return this.lenght;
    }

}

/* 

O grande feiticeiro Eldrin vive em uma torre cheia de livros de feitiços. 
Ele sempre coloca os novos livros no topo da pilha e só pode pegar o que está no topo primeiro.

Implemente um sistema para ajudá-lo a organizar seus feitiços com as seguintes funcionalidades:
- Adicionar um novo feitiço no topo da pilha
- Remover o feitiço do topo (Eldrin usou e guardou em outro lugar)
- Ver qual feitiço está no topo sem removê-lo
- Verificar se não há mais feitiços na pilha

*/

const tower = new SpellStack();

tower.addSpell("Avada Kedavra");
tower.addSpell("Zoltraak");
tower.addSpell("Lumos");

console.table(tower.spells);

tower.seekSpell();
tower.removeSpell();
tower.removeSpell();
tower.removeSpell();
