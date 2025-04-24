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

    insertAt(value, index) {
        const newNode = new Node(value);                            // novo nó que pegará o valor inserido - ao ser criado, value = valor inserido / next = null / prev = null
        let current = this.head;                                    // atribui o valor do início (head) para o current

        if (index === 0)                                            // se o índice for 1, adicionará no início
        {
            this.prepend(value);
            return;
        }

        if (index === this.length + 1)                              // se o índice for maior ou igual ao comprimento da lista, adicionará no fim
        {
            this.append(value);
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

    removeAt(index) {
        let current = this.head;
    
        if (index === 0) 
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

    find(value) {
        let current = this.head;
        let index = 0;

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

/*

Use a estrutura para simular o histórico de páginas acessadas. Com
traverseReverse, mostre a navegação para trás (voltar página).
Extra: implementar "ir para página específica" usando find.

*/

const historico = new DoublyLinkedList;

historico.append("Google.com");
historico.append("Teams.microsoft.com");
historico.append("Youtube.com");

console.log("Últimos acessos (ordem contrária):")
historico.traverseReverse();

if (historico.find("Teams.microsoft.com"))
{
    let paginaIndex = historico.find("Teams.microsoft.com");
    console.log("Página encontrada! Index: " + paginaIndex);
}