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

Em uma batalha épica, um grupo de heróis possui uma sequência de
poderes especiais (representados por uma lista encadeada), e cada herói
pode ativar um poder em sequência. No entanto, durante a batalha, eles
precisam reorganizar e ajustar seus poderes:

– Adicione um novo poder no início e outro no fim da lista de poderes.
– Um dos poderes, "Raio Congelante", acabou se tornando ineficaz, então ele precisa
ser removido.
– Verifique se o poder "Escudo de Fogo" está disponível para o herói ativar.
– Implemente essa lista encadeada para ajudar os heróis a gerenciar seus poderes
durante a batalha.

*/