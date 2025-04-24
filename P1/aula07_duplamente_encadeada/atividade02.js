class Node{

    constructor(value){
        this.value = value;
        this.next = null; //Próximo nó
        this.prev = null; //Nó anterior
        this.find = -1;
    }
}

class partyMine {
    constructor(){
        this.head = null; //Primeiro nó (cabeça)
        this.tail = null; //Último nó (cauda)
        this.length = 0; //Tamanho da lista
    }

    //Adicionar um nó ao final da lista
    append(value){
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    //Adicionar um nó ao início da lista
    prepend(value){
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nest = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    //Remove o nó do final da lista
    removeLast(){
        if (!this.tail) return null;

        const removedNode = this.tail;
        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedNode.value;
    }

    //Remove o nó do início da lista
    removeFirst(){
        if (!this.head) return null;

        const removedNode = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removedNode.value;
    }

    //Percorrer a lista do inicio ao fim
    traverse(){
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    //Percorre a lista do fim ao início
    traverseReverse(){
        let current = this.tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }
    
    find(value) {
        let current = this.head;
        let index = 1;

        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;
    }

}

// Implemente um método find(value) na lista duplamente encadeada que retorne o índice do nó que contém o valor fornecido. Se o valor não for encontrado, retorne -1.

const list = new partyMine()
list.append("Braixen");
list.append("Mewtwo");
list.append("Lucario");
list.append("Treecko");
list.append("Pikachu");

console.log("Lista de pokémons:")
list.traverse();

console.log("\nVerificando 'Braixen'...")
console.log("Posição: " + list.find("Braixen"))


