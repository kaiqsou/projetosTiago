class TreasureChest {

    constructor()
    {
        this.treasures = [];
    }

    storeTreasure(treasure)
    {
        this.treasures.push(treasure);
        console.log(`Tesouro "${treasure}" guardado no baú!`);                       
    }

    takeTreasure()
    {
        if (this.isEmpty()) {
            console.log("O baú está vazio!");
            return
        }
        console.log(`Tesouro "${this.treasures.pop()}" retirado do baú!`)
    }

    peekTreasure()
    {
        if (this.isEmpty()) 
        {
            console.log("O baú está vazio!");
            return;
        }

        console.log(this.treasures.length);

        console.log(`Último tesouro: "${this.treasures[this.treasures.length - 1]}"`);
    }

    chestSize()
    {
        return this.treasures.length;
    }

    isEmpty()
    {
        return this.treasures.length === 0;
    }

}

/* 

O capitão Barbaruiva tem um baú cheio de tesouros, mas ele só consegue pegar o último item que colocou.
Crie um programa para ajudá-lo a:
- Guardar um novo tesouro no baú
- Retirar o último tesouro guardado
- Olhar qual é o último tesouro sem pegá-lo
- Saber se o baú está vazio

*/

const tesouro = new TreasureChest();

tesouro.storeTreasure("Anel de ouro");
tesouro.storeTreasure("Taça de Prata");
tesouro.storeTreasure("Rubi");

tesouro.peekTreasure();
tesouro.chestSize();
console.table(tesouro.treasures);
