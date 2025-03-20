class Node      // node = nó
{
    constructor(value)
    {
        this.value = value; // "this" é um operador que faz referencia ao próprio objeto, chama os valores do objeto em si
        this.next = null;   // ponteiro para o próximo nó
    }
}

class LinkedList 
{
    constructor()
    {   
        this.head = null;   // a lista começa vazia
    }

    // inserir no começo da lista
    insertAtBeginning(value)
    {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // inserir no final da lista
    insertAtEnd(value)
    {
        let newNode = new Node(value);

        if (this.head === null)         // se a head é nula é porque não há elementos, então ele cria um novo nó
        {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null)  // se o current.next é diferente de nula, avançar pro próximo valor
        {                              // caso seja nula, criará um novo objeto

            current = current.next; 
        }
        
        current.next = newNode;   
    }

    // remover um nó por valor
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

    // exibir a lista
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

        return null;    // retorna null se o valor não for encontrado
    }

    // exibir a lista (opcional para ajudar na visualização)
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