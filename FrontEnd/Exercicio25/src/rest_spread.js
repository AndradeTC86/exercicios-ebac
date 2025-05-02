function somar() {
    let soma = 0

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }
    
    return soma
}

console.log(somar(1, 2, 3, 4, 5))

//rest operator
function somaRest(...numeros) {
    const soma = numeros.reduce((total, numero) => {
        total += numero
        return total
    }, 0)
    return soma
}

console.log(somaRest(1, 2, 3, 4, 5))


//spread operator
const linguagensProgramacaoFrontend = ['JavaScript', 'HTML', 'CSS']
const linguagensProgramacaoBackend = ['Java', 'C#', 'Python']
const linguagensProgramacao = [...linguagensProgramacaoFrontend, ...linguagensProgramacaoBackend]
console.log(linguagensProgramacao)

const carroDono1 = {
    modelo: 'Fusca',
    ano: 1970,
    cor: 'azul'
}

const carroDono2 = {
    ...carroDono1,
    cor: 'preto',
}

console.log(carroDono2)
console.log(carroDono1)

//desestruturacao de objetos
const { modelo: modeloCarro1 } = carroDono1
const { modelo: modeloCarro2 } = carroDono2

console.log(modeloCarro1)
console.log(modeloCarro2)

//desestruturacao de arrays
const [item1, item2, item3, ...demaisLInguagens] = linguagensProgramacao

console.log(item1)
console.log(item2)
console.log(item3)
console.log(demaisLInguagens)