// dicionários são usados para representar respostas de APIs e armazenar dados recebidos do servidor.

const apiResponse = 
{
    status: "success",
    data: {id: 1, nome: "Produto A", preco: 100}
};

console.log(apiResponse.data.nome); // saída: Produto A

// criando um dicionario com um objeto
const dicionario = 
{
    nome: "João",
    idade: 25,
    profissao: "Engenheiro"
};

console.log(dicionario.nome);       // saída: João
console.log(dicionario["idade"]);   // saída: 25

