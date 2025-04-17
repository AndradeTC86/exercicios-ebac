function Carro(modelo, fabricante, anoModelo, anoFabricacao, cor) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao
    this.cor = cor
    this.acelerar = function() {
        console.log('Acelerando...')
    }
    this.frear = function() {
        console.log('Freando...')
    }
}

const carroJoao = new Carro('Fusca', 'Volkswagen', 1970, 1969, 'azul')
const carroMaria = new Carro('Civic', 'Honda', 2020, 2019, 'preto')

const nome = 'João'
const idade = 30
const maiorDeIdade = true
const conhecimentos = ['JavaScript', 'HTML', 'CSS']

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos,
}

function exibirDados(dado) {
    console.log(pessoa[dado])
}

exibirDados('nome')
exibirDados('idade')
exibirDados('maiorDeIdade')
exibirDados('conhecimentos')

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
