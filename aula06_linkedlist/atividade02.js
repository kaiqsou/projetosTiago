class Node 
{
    constructor(value)
    {
        this.value = value;
        this.next = null;   
    }
}

class LinkedList 
{
    constructor()
    {   
        this.head = null;
    }

    insertAtBeginning(value)
    {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtEnd(value)
    {
        let newNode = new Node(value);

        if (this.head === null)
        {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) 
        {                            

            current = current.next; 
        }

        current.next = newNode;   
    }

    removeByValue(value)
    {
        if (this.head === null)
        {
            return;
        }

        if (this.head.value === value)
        {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value)
        {
            current = current.next;
        }

        if (current.next !== null)
        {
            current.next = current.next.next;
        }
    }

    find(value)
    {
        let current = this.head;

        while(current !== null)
        {
            if (current.value === value)
            {
                return current;
            }
            current = current.next;
        }

        return null;  
    }

    printList()
    {
        let current = this.head;
        let list = '';

        while (current !== null)
        {
            list += current.value + ' -> ';
            current = current.next;
        }

        console.log(list + 'null');
    }
}

/*

Na corrida anual das tartarugas, cada tartaruga segue a outra formando
uma fila (como uma lista encadeada). As tartarugas são muito pacientes,
mas a tartaruga "Lenta" decide desistir da corrida, e outra, "Veloz", quer
entrar na fila em uma posição específica.

• Sua missão é:
– Inserir uma nova tartaruga no início da fila e outra no final.
– Remover a tartaruga "Lenta" da corrida, se ela estiver na fila.
– Encontrar a tartaruga "Veloz" para saber em que posição ela está.
– Ajude as tartarugas a organizarem a fila e implemente essas operações usando uma
lista encadeada.

*/

const tartarugas = new LinkedList();

tartarugas.insertAtBeginning("Tartaruga trapaceira");
tartarugas.insertAtEnd("Tartaruga atleta");
tartarugas.insertAtEnd("Tartaruga veloz");
tartarugas.insertAtEnd("Tartaruga lenta");
tartarugas.insertAtEnd("Tartaruga manca");

tartarugas.printList();

if (tartarugas.find("Tartaruga lenta"))
{
    console.log("Tartaruga lenta desistiu!")
    tartarugas.removeByValue("Tartaruga lenta");
} else{
    console.log("Tartaruga lenta ainda está na fila!")
};

if (tartarugas.find("Tartaruga veloz")){
    if (tartarugas.find("Tartaruga veloz").next != null)
    {
        console.log("Tartaruga veloz está na frente de: " + tartarugas.find("Tartaruga veloz").next.value);
    }
    else
    {
        console.log("Tartaruga veloz está na última posição!");
    }
}