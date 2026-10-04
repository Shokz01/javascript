let aluno = {
    nome: 'guilherme',
    idade: 15,
    escola: 1,
    materias: ['matemática', 'português', 'biologia', 'inglês'],
    aprovado: true
}

let n = JSON.stringify(aluno.nome)
let i = JSON.stringify(aluno.idade)
let e = JSON.stringify(aluno.escola)
let m = JSON.stringify(aluno.materias)
let a = JSON.stringify(aluno.aprovado)

console.log(
    `O aluno ${n}, de ${i} anos, estudante da sala ${e}, gosta de ${m}, e foi aprovado ${a}`
)