const alunos = [
    {nome: "Lucas", nota: 4.5 },
    {nome: "Ana", nota: 9.0 },
    {nome: "Pedro", nota: 5.5 },
    {nome: "Maria", nota: 8.0 },
    {nome: "João", nota: 6.5 },    
]

function filtrarAprovados(alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= 6
    })
}

const aprovados = filtrarAprovados(alunos)
console.log(aprovados)