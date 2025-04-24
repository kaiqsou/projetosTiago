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

Você está ajudando um explorador a planejar sua trilha de aventura na
floresta. Cada ponto da trilha (nó) contém um local interessante, como uma
cachoeira, uma caverna ou um mirante. O explorador quer começar a trilha
em um ponto específico e adicionar novos pontos durante a jornada. Sua
missão é ajudá-lo a:

– Inserir pontos da trilha no início e no fim da lista de locais a serem visitados.
– Depois, o explorador decide remover um local que descobriu ser muito perigoso.
– Por fim, ele quer verificar se o mirante ainda faz parte da trilha.
– Implemente uma lista encadeada para representar a trilha e resolva essas tarefas.

*/

const trilha = new LinkedList();

trilha.insertAtBeginning("Cachoeira");
trilha.insertAtEnd("Caverna");
trilha.insertAtBeginning("Mirante");

console.log("Início");
trilha.printList()

trilha.removeByValue("Caverna");

if (trilha.find("Mirante") !== null)
{
    console.log("\n" + "Mirante está na lista!")
} else {
    console.log("\n" + "Mirante não está na lista!")
}

console.log("\n" + "Fim");
trilha.printList()