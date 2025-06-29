/* 

Uma plataforma de rede social precisa armazenar e gerenciar as conexões entre usuários, seus interesses, e as mensagens trocadas entre eles. 
Para isso, a equipe de desenvolvimento decidiu implementar a lógica utilizando estruturas de dados como listas encadeadas, listas duplamente encadeadas, 
árvores binárias e grafos.

Abaixo está a especificação da lógica:

I. Cada usuário possui uma lista de interesses representada como uma lista
encadeada.

II. A timeline de mensagens de cada usuário será representada por uma lista
duplamente encadeada para facilitar navegação entre mensagens recentes e
antigas.

III. As conexões entre os usuários formam um grafo não-direcionado, onde cada nó
representa um usuário e as arestas representam as amizades.

IV. Para armazenar e buscar rapidamente as mensagens enviadas pelos usuários, será
utilizada uma árvore binária de busca, onde cada nó contém o ID do usuário e as
mensagens enviadas por ele.

*/

/*

1. Implementação de lista encadeada

Implemente uma lista encadeada para armazenar os interesses de um usuário. A estrutura deve permitir:
• Inserir um novo interesse no final da lista.
• Exibir todos os interesses armazenados.
Dica: Cada nó deve conter o nome do interesse e uma referência para o próximo nó

*/


// Lista Encadeada — Interesses do Usuário

/* Criando um nó para representar um interesse do usuário. Cada nó guarda um valor (interesse)
e a referência para o próximo nó da lista. */
class InterestNode 
{
    constructor(value) 
    {
        this.value = value;
        this.next = null;
    }
}

/* Cria a estrutura da lista encadeada para guardar vários interesses. Permite inserir novos interesses no final da lista 
e imprimir todos os interesses.*/

class InterestList 
{
    constructor() 
    {
        this.head = null;
    }

	// Adiciona um novo interesse no final da lista
    insertAtEnd(value) 
    {
        const newNode = new InterestNode(value);

        if (!this.head) 
        {
			// Se a lista estiver vazia, o novo nó será o primeiro
            this.head = newNode;
        } 
        else 
        {
			// Senão, percorre até o final e adiciona o novo nó
            let current = this.head;
			
            while (current.next) 
			{
				current = current.next
			};
			
            current.next = newNode;
        }
    }

	// Imprime todos os interesses do usuário
    printList() 
    {
        let current = this.head;
        while (current) 
        {
            console.log("-", current.value);
            current = current.next;
        }
    }
}

/* 

2. Implementação de lista duplamente encadeada

Crie uma lista duplamente encadeada para gerenciar a timeline de mensagens de um usuário. A estrutura deve permitir:
• Inserir uma nova mensagem no final da timeline.
• Exibir as mensagens em ordem do mais antigo ao mais recente e vice-versa.
Dica: Cada nó deve conter o conteúdo da mensagem, referências para o nó anterior e o
próximo.

*/

// Lista Duplamente Encadeada — Timeline

// Cada nó da timeline guarda a mensagem e tem referências para o próximo e o anterior.
class TimelineNode 
{
    constructor(message) 
    {
        this.message = message;
        this.prev = null;
        this.next = null;
    }
}

/* Cria a estrutura de timeline que permite navegar para frente e para trás. Permite adicionar novas mensagens ao final 
e exibir a timeline em ambas direções. */
class DoublyLinkedList 
{
    constructor() 
    {
        this.head = null;
        this.tail = null;
    }

	// Adiciona uma nova mensagem no final da timeline
    append(message) 
    {
        const newNode = new TimelineNode(message);
        if (!this.head) 
        {
			// Se a lista estiver vazia, novo nó será o início e o fim
            this.head = this.tail = newNode;
        } 
        else 
        {
			// Liga o novo nó ao fim da lista e atualiza o "tail"
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

	// Mostra as mensagens do mais antigo ao mais recente
    traverse() 
    {
        let current = this.head;
        while (current) 
        {
            console.log("-", current.message);
            current = current.next;
        }
    }

	// Mostra as mensagens do mais recente ao mais antigo
    traverseReverse() 
    {
        let current = this.tail;
        while (current) 
        {
            console.log("-", current.message);
            current = current.prev;
        }
    }
}

/* 

3. Representação de um grafo não-direcionado

Implemente um grafo para representar as conexões entre usuários. O grafo deve permitir:
• Adicionar um novo usuário.
• Criar uma amizade entre dois usuários.
• Exibir todas as conexões de um usuário específico.
Dica: Use um objeto para armazenar os usuários e suas respectivas listas de adjacência.

*/

// Grafo — Conexões de Amizade

/* Representa a rede de amizades com um grafo não-direcionado. Cada usuário tem 
uma lista de amigos (lista de adjacência). */
class Grafo 
{
    constructor() 
    {
        this.usuarios = {};
    }

	// Adiciona um novo usuário ao grafo, se ainda não existir
    adicionarUsuario(nome) 
    {
        if (!this.usuarios[nome]) 
        {
            this.usuarios[nome] = [];
        }
    }

	// Cria uma amizade entre dois usuários (aresta bidirecional)
    adicionarAresta(u1, u2) 
    {
        this.adicionarUsuario(u1);
        this.adicionarUsuario(u2);
        this.usuarios[u1].push(u2);
        this.usuarios[u2].push(u1);
    }

	// Exibe todas as amizades do grafo
    imprimirGrafo() 
    {
        for (const usuario in this.usuarios) 
        {
            console.log(`${usuario} -> ${this.usuarios[usuario].join(", ")}`);
        }
    }
}

/*

4. Construção de uma árvore binária de busca

Implemente uma árvore binária de busca para armazenar mensagens enviadas por
usuários. A árvore deve permitir:
• Inserir uma nova mensagem associada a um ID de usuário.
• Buscar e exibir todas as mensagens enviadas por um usuário específico.
Dica: Cada nó deve conter o ID do usuário, um array com as mensagens enviadas, e
referências para os nós esquerdo e direito.

*/

// Árvore Binária de Busca — Armazenamento de Mensagens por ID de Usuário

/* Cada nó armazena o ID do usuário e suas mensagens. Permite inserção de mensagens 
e busca por ID. */
class TreeNode 
{
    constructor(id) 
    {
        this.id = id;
        this.mensagens = [];
        this.left = null;
        this.right = null;
    }
}

/* Cria a árvore binária que armazena usuários e suas mensagens de forma organizada. Permite inserir 
e buscar mensagens por ID de usuário. */

class BinaryTree 
{
    constructor() 
    {
        this.root = null;
    }

	// Insere uma nova mensagem para o ID especificado
    insert(id, mensagem = null) 
    {
        const inserirMsg = (node, id, msg) => 
        {
            if (!node) 
            {
				// Se não existe o nó ainda, cria um novo
                const novo = new TreeNode(id);
				
                if (msg) 
				{
					novo.mensagens.push(msg);
				}
				
                return novo;
            }
			
			// Decide se vai para a esquerda ou direita na árvore
			
            if (id < node.id) 
			{	
				// Se o ID for menor que o ID do nó atual, insere no lado esquerdo (menores)
				node.left = inserirMsg(node.left, id, msg);
			}	
			
            else if (id > node.id) 
			{	
				// Se o ID for maior que o ID do nó atual, insere no lado direito (maiores)
				node.right = inserirMsg(node.right, id, msg);
			} 
			
            else if (msg) 
			{
				// ID já existe, adiciona nova mensagem
				node.mensagens.push(msg); 
			}

            return node;
        };

        this.root = inserirMsg(this.root, id, mensagem);
    }

	// Busca e retorna todas as mensagens de um usuário pelo ID
    buscarMensagens(id) 
    {
		// Começa a busca pela raiz da árvore
        let current = this.root;
		
        while (current) 
        {
			// Se encontrou o nó com o ID exato, retorna a lista de mensagens dele
            if (id === current.id) 
			{
				return current.mensagens;
			}
			
			// Se o ID procurado for menor, vai para o lado esquerdo da árvore
            current = id < current.id ? current.left : current.right;
        }

        return [];
    }

	// Percorre a árvore em ordem crescente de ID e exibe as mensagens
    inOrder(node = this.root) 
    {
        if (!node) 
		{
			return;
		}
		
        this.inOrder(node.left);
        console.log(`ID: ${node.id}, Mensagens: ${node.mensagens.join(" | ")}`);
        this.inOrder(node.right);
    }
}


/*

5. Integração das estruturas de dados

Desenvolva uma função que simula o uso das estruturas criadas para realizar as seguintes operações:
• Adicionar 3 usuários com interesses, conexões e mensagens.
• Listar os interesses de cada usuário.
• Exibir a timeline de mensagens de um dos usuários.
• Buscar as mensagens enviadas por um usuário específico.
• Exibir as conexões de todos os usuários.
Dica: Use exemplos simples e comentados para demonstrar o funcionamento das
estruturas em conjunto.

*/

/* Simula o uso das estruturas criadas:
- Cria usuários com interesses, mensagens e conexões.
- Mostra os interesses, timeline, mensagens por ID e conexões da rede. */

// Define a classe de usuário com nome, ID, interesses e timeline
class Usuario 
{
    constructor(nome, id) 
    {
        this.nome = nome;
        this.id = id;
        this.interesses = new InterestList();
        this.timeline = new DoublyLinkedList();
    }
}

// Cria 3 usuários
const usuarios = [new Usuario("Alice", 1), new Usuario("Bob", 2), new Usuario("Carlos", 3)];

// Adiciona interesses para cada usuário
usuarios[0].interesses.insertAtEnd("Futebol");
usuarios[0].interesses.insertAtEnd("Cinema");
usuarios[1].interesses.insertAtEnd("Música");
usuarios[2].interesses.insertAtEnd("Programação");
usuarios[2].interesses.insertAtEnd("Jogos");

// Adiciona mensagens à timeline da Alice
usuarios[0].timeline.append("Oi! Eu sou a Alice");
usuarios[0].timeline.append("Adoro esportes!");

// Cria grafo e adiciona amizades
const grafo = new Grafo();
grafo.adicionarAresta("Alice", "Bob");
grafo.adicionarAresta("Bob", "Carlos");

// Cria árvore binária e insere mensagens por ID de usuário
tree = new BinaryTree();
tree.insert(1, "Mensagem da Alice");
tree.insert(2, "Mensagem do Bob");
tree.insert(3, "Mensagem do Carlos");
tree.insert(1, "Mais uma da Alice");

// Mostra os interesses de cada usuário
console.log("\n=== Interesses ===");
usuarios.forEach(user => 
{
    console.log(user.nome + ":");
    user.interesses.printList();
});

// Mostra a timeline de mensagens da Alice
console.log("\n=== Timeline da Alice ===");
usuarios[0].timeline.traverse();

// Mostra as mensagens enviadas por Alice (ID 1)
console.log("\n=== Mensagens do usuário 1 (Alice) ===");
console.log(tree.buscarMensagens(1));

// Mostra as conexões de todos os usuários
console.log("\n=== Rede de Amigos ===");
grafo.imprimirGrafo();