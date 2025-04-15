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