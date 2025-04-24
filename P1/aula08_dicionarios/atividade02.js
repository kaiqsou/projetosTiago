/* 2) Implemente uma função que receba uma string e retorne um
   objeto onde as chaves são os caracteres e os valores, o número de vezes que aparecem na string. 
   Ignore os espaços. */

   /* 
    
    arroz
    a: 1
    r: 2
    o: 1
    z: 1

    */

function separarLetras(valor)
{
    let letras = valor.split("");
    let qtd = letras.length;

    for(i = 0; i <= qtd; i++)
    {
        let letra = '';
    }

    console.log(letras);
}

separarLetras("Arroz");