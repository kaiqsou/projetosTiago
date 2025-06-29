// Classe que representa um nó da árvore
class Node 
{
  constructor(value) 
  {
    this.value = value; // valor armazenado no nó
    this.left = null; // filho da esquerda
    this.right = null; // filho da direita
  }
}

// Classe que representa a árvore binária
class BinaryTree 
{
  constructor() 
  {
    this.root = null; // a raiz é inicializada como nula
  }

  // Método para inserir um novo valor na árvore
  insert(value) {
    const newNode = new Node(value); // cria um novo nó
    if (this.root === null) {
      this.root = newNode; // se a árvore estiver vazia, define o novo nó como raiz
    } else {
      this._insertNode(this.root, newNode); // chama método auxiliar para inserir
    }
  }

  // Método auxiliar para inserção
  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode; // insere à esquerda se estiver vazio
      } else {
        this._insertNode(node.left, newNode); // continua procurando
      }
    } else {
      if (node.right === null) {
        node.right = newNode; // insere à direita se estiver vazio
      } else {
        this._insertNode(node.right, newNode); // continua procurando
      }
    }
  }

  // Percurso em ordem (in-order)
  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left); // visita filho esquerdo
      console.log(node.value); // visita nó atual
      this.inOrder(node.right); // visita filho direito
    }
  }

  // Percurso em pré-ordem (pre-order)
  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.value); // visita nó atual
      this.preOrder(node.left); // visita filho esquerdo
      this.preOrder(node.right); // visita filho direito
    }
  }

  // Percurso em pós-ordem (post-order)
  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left); // visita filho esquerdo
      this.postOrder(node.right); // visita filho direito
      console.log(node.value); // visita nó atual
    }
  }

  // Método para buscar um valor na árvore
  search(value) 
  {
    return this._searchNode(this.root, value);
  }

  // Busca por um valor na árvore
  _searchNode(node, value) {
    if (node === null) 
    {
      return false; // valor não encontrado
    }
    if (value === node.value) 
    {
      return true; // Se o valor é encontrado, retorna true
    } 
    else if (value < node.value) 
    {
      // Se o valor procurado é menor, continua na arvore a esquerda
      return this._searchNode(node.left, value);
    } 
    else 
    {
      // Se o valor procurado é maior, continua na arvore a direita
      return this._searchNode(node.right, value);
    }
  }

  // Remove um valor da árvore
  remove(value) {
    this.root = this._removeNode(this.root, value); // Inicia a remoção a partir da raiz
  }

  // Método auxiliar para remoção
  _removeNode(node, value) {
    if (node === null) {
      return null; // valor não encontrado
    }

    if (value < node.value) {
      node.left = this._removeNode(node.left, value); // busca do lado esquerdo
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value); // busca do lado direito
      return node;
    } else {
      // Se o valor é igual ao nó atual, este é o nó a ser removido

      // Caso 1: nó sem filhos
      if (node.left === null && node.right === null) {
        node = null; // Remove o nó ao definir como null
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Caso 3: Nó com dois filhos
      // Encontra o nó com o menor valor na subárvore direita
      const aux = this._findMinNode(node.right);
      node.value = aux.value;
      node.right = this._removeNode(node.right, aux.value); // Remove o nó duplicado na subárvore direita
      return node;
    }
  }

  // Encontra o menor valor de uma subárvore
  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left; // continua à esquerda até o fim
    }
    return node;
  }
}

module.exports = BinaryTree;
