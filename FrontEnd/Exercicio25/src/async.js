function thread() {
    let execucoes = 0
    for (let i = 0; i < 10000000000; i++) {
        execucoes++
    }
    return execucoes
}

const multiThread = new Promise((resolve, reject) => {
    try {
        let execucoes = 0
        for (let i = 0; i < 10000000000; i++) {
            execucoes++
        }
        resolve(execucoes) 
    } catch (error) {
        reject('Erro na execução')
    }
})


const promise = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com sucesso! Bem vindo, ${login}`)
        }, 3000)
    })
}

async function execucao () {
    console.log('Iniciando a execução...')
    
    promise('cliente@teste.com', 'Senha123').then((resultado) => {
        console.log(resultado)
    })
    
    try {
        const resultado = await multiThread
        console.log('Resultado da execução:', resultado)
    } catch (error) {
        console.error('Erro:', error)
    }
    console.log('Execução finalizada!')
}

execucao()