class Node {
    constructor(value) {
        this.value = value;
        this.next = null;   // próximo nó
        this.prev = null;   // nó anterior
    }
}

class DoublyLinkedList {
    constructor() 
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.index = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    traverseReverse(){
        let current = this.tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }
}

/*

Cada vagão é um nó. Simule adicionar vagões à frente e atrás. Mostre a composição
do trem indo e voltando com traverse e traverseReverse.

*/

const trem = new DoublyLinkedList();
trem.append("Vagão A");
trem.append("Vagão B");
trem.prepend("Locomativa");

console.log("Trem normal: ");
trem.traverse();

console.log("Trem voltando: ");
trem.traverseReverse();