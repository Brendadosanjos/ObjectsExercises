/*16.Percorrer Array de Objetos
Escreva um loop que percorra um array de objetos e imprima uma propriedade específica de cada objeto.*/
let pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carla", idade: 28 },
    { nome: "Diego", idade: 22 }
  ];
  
  for (let u = 0; u < pessoas.length; u++) {
    console.log(pessoas[u].nome);  
  }




/*17.Percorrer Propriedades de um Objeto
Escreva um loop que percorra um objeto e imprima todas as suas chaves e valores.*/
let obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
  console.log(key); // 'a', 'b', 'c' (chaves)
  console.log(obj[key]); // 1, 2, 3 (valores)
}




/*18.Cópia de Elementos de um Array
Escreva um loop que copie todos os elementos de um array para outro array.*/
let arrayFrutas = ['maracuja', 'caja', 'caju', 'melão']
let loop =[]

for (let elemento of arrayFrutas){
  loop.push(elemento)
}
console.log(loop);




//ou com o método SPLICE
let arraycopia = arrayFrutas.slice();
console.log(arrayFrutas);




/*19.Verificação de Presença de Número em um Array
Escreva um loop que verifique se um número específico está presente em um array.*/
let numeros = [5, 4, 4, 3, 2, 1]
console.log(numeros.some(num => num === 4));




/*20.Remoção de Elementos Duplicados de um Array
Escreva um loop que remova todos os elementos duplicados de um array.*/
let arrayOriginal = [1, 2, 3, 4, 3, 2, 5, 6, 1];
let arraySemDuplicatas = [...new Set(arrayOriginal)];

console.log(arraySemDuplicatas)



/*21.Soma de Números Ímpares Múltiplos de Três
Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.*/
let soma = 0;

for (let i = 1; i <= 500; i++) {
  if (i % 2 === 1 && i % 3 === 0) {
    soma += i;
  }
}

console.log(soma)




/*22.Alturas de 15 Pessoas
Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar:
A menor altura do grupo;
A maior altura do grupo;*/
let alturas = [1.75, 1.82, 1.68, 1.90, 1.77, 1.65, 1.85, 1.80, 1.70, 1.72, 1.78, 1.88, 1.74, 1.76, 1.81];

// Calcular a menor e a maior altura
let menorAltura = Math.min(...alturas);
let maiorAltura = Math.max(...alturas);

console.log(`A menor altura do grupo é: ${menorAltura}`);
console.log(`A maior altura do grupo é: ${maiorAltura}`);




/*23.Média Aritmética e Percentual de Valores
Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.*/


/*24.Contagem de Números em Intervalos
Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um número negativo.*/


/*25.Contagem de Números Pares e Ímpares
Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos. O número que encerrará a leitura será zero.*/


/*26.Números Ímpares entre 100 e 200
Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.*/


/*27.Tabuada de N
Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.*/


/*28.Sequência em P.A.
Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma sequência em P.A. contendo 10 valores.*/


/*29.Sequência em P.G.
Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma sequência em P.G. contendo 10 valores.*/


/*30.Cálculo do Fatorial
Escreva um algoritmo que leia um valor inicial A e imprima a sequência de valores do cálculo de A! e o seu resultado. Ex: 5! = 5 x 4 x 3 x 2 x 1 = 120.*/


