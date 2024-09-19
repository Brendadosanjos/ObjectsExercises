// // Function - Arrow Function - Parâmetros
// function somaDasNotas(notas) {
//     let soma = 0
//     notas.forEach((nota) => soma += nota)
//     return soma
// }

// function calcularMedia(notas) {
//     const soma = somaDasNotas(notas)
//     return (soma / notas.length).toFixed(2)
// }

// console.log(calcularMedia([5.5, 7, 4, 8, 6.3]))

// // Array - Objeto - (desestruturação)
// let alunos = [
//     { id: 1, nome: 'Gil', idade: 10, serie: '5B' },
//     { id: 2, nome: 'José', idade: 11, serie: '5B' },
//     { id: 3, nome: 'João', idade: 9, serie: '5B' },
// ]

// alunos.unshift({ id: 0, nome: 'Fulano', idade: 10, serie: '6C' })
// alunos = alunos.filter((aluno) => aluno.id !== 2)
// alunos.forEach((aluno) => {
//     if (aluno.id === 1) {
//         aluno.nome = 'Ciclano'
//     }
// })
// alunos.pop()
// alunos.shift()

// console.log(alunos)


//criem 4 funções, criar aluno recebe os dados menos o id, ler o aluno recebe o id com o parametro e retorna o aluno, atualizar aluno recebe o id e atualiza os campos, deletar um aluno

let alunos2 = []

function criaraluno(aluno){alunos2.push({id: alunos2.length, ...aluno})}
criaraluno({nome: 'Gil', idade:36, serie: 5})
criaraluno({nome: 'Brenda', idade:12, serie: 2})   
criaraluno({nome: "Shantal", idade: 20, serie: 8})  

console.log(alunos2);

let numero2 = alunos2.find((i)=> i.id === 2)
console.log(numero2.nome);
// for(let values of alunos2){
//     console.log(values.nome, values.idade, values.serie);
// }

let substituir = alunos2.splice(2, 3, {id: 2, nome: "Ully", idade: 11, serie: 3})

console.log(alunos2);

