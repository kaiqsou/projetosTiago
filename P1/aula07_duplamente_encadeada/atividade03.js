class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;   // próximo nó
        this.prev = null;   // nó anterior
    }
}

class DoublyLinkedList 
{
    constructor()
    {
        this.head = null;  
        this.tail = null;
        this.length = 0;   
    }

    apprend(value){
        const newNode = new Node(value);

        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else 
        {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);

        if (!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    removeLast(){
        if (!this.tail) return null;

        const removedNode = this.tail;

        if (this.tail === this.head)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedNode.value;
    }

    removeFirst(){
        if (!this.head) return null;

        const removedNode = this.head;
        if (this.head === this.tail) 
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removedNode.value;
    }

    traverse(){
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    traverseReverse(){
        let current = this.tail;
        while(current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    removeAt(index) {
        let current = this.head;
    
        if (index === 1) 
        {   
            this.removeFirst();
            return;
        }
    
        if (index === this.length) 
        {
            this.removeLast();
            return;
        }
    
        for (let i = 1; i < index; i++) // encontra o nó a ser removido
        {
            current = current.next;
        }
    
        current.prev.next = current.next;
        current.next.prev = current.prev;
    
        this.length--;

        return current.value;
    }
}

// Modifique o método remove para que ele remova um nó em uma posição específica da lista duplamente encadeada, chame-o de removeAt(index). 

const lista = new DoublyLinkedList();

lista.apprend("Pikachu");
lista.apprend("Lucario");
lista.apprend("Fennekin");
lista.apprend("Charizard");

lista.traverse();

console.log("\nRemovendo o pokémon da posição 3...\n")

lista.removeAt(3);
lista.traverse();