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

    insertAt(value, index) {
        const newNode = new Node(value);                            // novo nó que pegará o valor inserido - ao ser criado, value = valor inserido / next = null / prev = null
        let current = this.head;                                    // atribui o valor do início (head) para o current

        if (index === 1)                                            // se o índice for 1, adicionará no início
        {
            this.prepend(value);
            return;
        }

        if (index === this.length + 1)                              // se o índice for maior ou igual ao comprimento da lista, adicionará no fim
        {
            this.apprend(value);
            return;
        }


        for (let i = 1; i < index - 1; i++) 
        {
            current = current.next;
        }

        newNode.next = current.next;    
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;

        this.length++;
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

// Atividade: Implemente uma função na classe DoublyLinkedList que insira um nó em uma posição específica, chamando insertAt(value, index)

const lista = new DoublyLinkedList();

console.log("Lista:")

lista.prepend("Pikachu");
lista.prepend("Lucario");
lista.prepend("Fennekin");
lista.prepend("Charizard");

lista.traverse();

console.log("\n")

console.log("Adicionando 'Breelom' na posição 2...")

lista.insertAt("Breelom", 2);

lista.traverse();