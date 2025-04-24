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
        this.head = null;   // primeiro nó (cabeça)
        this.tail = null    // último nó (cauda)
        this.length = 0;    // tamanho da lista
    }

    // adicionar um nó ao final da lista
    apprend(value){
        const newNode = new Node(value);

        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else 
        {
            // coloca na tail (fim)
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    // adicionar um nó no inicio da lista
    prepend(value){
        const newNode = new Node(value);

        if (!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            // coloca na head (inicio)
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    // remove o nó do final da lista
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

    // remove o nó do início da lista
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

    // percorrer a lista do início ao fim
    traverse(){
        let current = this.head;    // começa pelo head
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // percorrer a lista do fim ao início
    traverseReverse(){
        let current = this.tail;    // começa pela tail
        while(current) {
            console.log(current.value);
            current = current.prev;
        }
    }
}

const list = new DoublyLinkedList();

list.apprend(10);
list.apprend(20);
list.apprend(30);

console.log("Percorrendo do início ao fim: ");
list.traverse();

list.prepend(5);

console.log("Percorrendo do início ao fim após adição no início: ");
list.traverse();

list.removeLast();
console.log("Percorrendo após remover o último nó");
list.traverse();

list.removeFirst();
console.log("Percorrendo após remover o primeiro nó");
list.traverse();

console.log("Percorrendo em ordem inversa:");
list.traverseReverse();

module.exports = DoublyLinkedList;