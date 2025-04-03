/*

1) Crie um objeto para armazenar informações de alunos, onde a chave é o número de matrícula e o valor é o nome do aluno.
   Adicione pelo menos 3 alunos ao dicionário e exiba os nomes iterando sobre as chaves. 

*/

const alunos =
{
    matricula001: "kaique",
    matricula002: "marina", 
    matricula003: "ivan"
}

for (const chave in alunos)
{
    console.log(`${chave}: ${alunos[chave]}`);
}