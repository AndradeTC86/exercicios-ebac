type aluno = {
    nome: string
    cursos?: string[]
    idade: number
}

const alunos: aluno[] = [
    { nome: 'João', cursos: ['Front-End', 'UX/UI'], idade: 20 },
    { nome: 'Maria', cursos: ['Back-End', 'Data Science'], idade: 22 },
    { nome: 'Pedro', cursos: ['Front-End', 'Data Science'], idade: 19 },
    { nome: 'Ana', cursos: ['UX/UI', 'Data Science'], idade: 21 },
    { nome: 'Lucas', cursos: ['Back-End', 'Front-End'], idade: 23 },
    { nome: 'Julia', cursos: ['UX/UI', 'Back-End'], idade: 20 },
    { nome: 'Marcos', cursos: ['Front-End', 'Data Science'], idade: 24 },
    { nome: 'Fernanda', cursos: ['Back-End', 'UX/UI'], idade: 22 },
    { nome: 'Roberto', cursos: ['Front-End', 'Data Science'], idade: 21 },
    { nome: 'Camila', cursos: ['Back-End', 'UX/UI'], idade: 20 }    
]

alunos.push({
    nome: "Carlos",
    cursos: ["QA", "Engenharia de Requisitos"],
    idade: 25
})

const novoAluno: aluno = {
    nome: "Roberto", 
    idade: 26
}

function exibeAluno(aluno: aluno) {
    console.log(`Nome: ${aluno.nome}`)
}
