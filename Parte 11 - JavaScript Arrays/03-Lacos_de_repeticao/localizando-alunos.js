const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]


//includes -> booleano
//indexOf -> 3
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))