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
        this.tail = null
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

Cada nó é uma música de uma playlist. Insira músicas no fim, remova uma
específica e permita busca por nome.
Desafio extra: Adicionar opção de "tocar próxima" (avançar no ponteiro).

*/

let playlist = new LinkedList();

playlist.insertAtEnd("Wonderwall");
playlist.insertAtEnd("Easy");
playlist.insertAtEnd("Dreamlike");
playlist.insertAtEnd("O'My!");
playlist.insertAtEnd("Ma Meilleure Ennemie");
playlist.printList();

playlist.removeByValue("O'My!");
playlist.printList();

if (playlist.find("Easy"))
{
    let musica = playlist.find("Easy");
    console.log("Música encontrada! Tocando: " + musica.value);

    if (musica.next !== null)
    {
        console.log("Próxima música: " + musica.next.value);
    }
    else
    {
        console.log("Fim da playlist!");
    }
}