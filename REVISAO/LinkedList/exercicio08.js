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

Usuário monta uma lista de compras com insertAtBeginning e insertAtEnd.
Permita remover itens com removeByValue e buscar com find. Imprima a lista em
cada etapa.

*/

let compras = new LinkedList();

compras.insertAtBeginning("Macarrão");
compras.insertAtEnd("Sorvete");
compras.insertAtEnd("Coca-cola 2L");
compras.insertAtEnd("Fini");
compras.printList();

compras.removeByValue("Coca-cola 2L");
compras.printList();

if (compras.find("Sorvete"))
{
    let item = compras.find("Sorvete");
    console.log("Item encontrado! Nome: " + item.value);
}
