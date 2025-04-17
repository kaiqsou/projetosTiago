/*

Simule as funcionalidades de "Desfazer" e "Refazer" de um editor de texto com
duas pilhas: uma para as ações feitas, outra para as ações desfeitas.
Exemplo: Digitar "A", "B", "C", desfazer duas vezes, refazer uma vez.

*/

let desfazer = [];
let refazer = [];

function digitar(letra)
{
    desfazer.push(letra);
    refazer = [];   // limpa o refazer
}

function desfazerAcao()
{
    if (desfazer.length > 0)
    {
        let ultima = desfazer.pop();
        refazer.push(ultima);
    }
    else
    {
        console.log("Está vazio.")
    }
}

function refazerAcao()
{
    if (refazer.length > 0)
    {
        let voltar = refazer.pop();
        desfazer.push(voltar);
    }
}

digitar("A");
digitar("B");
digitar("C");
desfazerAcao();
desfazerAcao();
refazerAcao();

console.log("Conteúdo atual: " + desfazer.join(''))







