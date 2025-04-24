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

const nomes = new LinkedList();
nomes.insertAtBeginning("Kaique");
nomes.insertAtEnd("Marina");
nomes.insertAtEnd("José");
nomes.insertAtEnd("Yasmin");
nomes.printList();

/*

a) Remover um valor específico
– Implemente a remoção de um valor específico e teste a remoção de
diferentes valores da lista encadeada.

*/

console.log("Removendo José...")
nomes.removeByValue("José");
nomes.printList();

/*

b) Buscar um valor na lista
– Implemente uma função de busca e teste-a para verificar se um valor
está presente na lista.

*/

console.log("Procurando 'Marina'...")
if (nomes.find("Marina"))
{
    let nome = nomes.find("Marina");
    console.log(nome.value + " encontrado(a)!");
}
else
{
    console.log("Não foi encontrado(a)!");
}