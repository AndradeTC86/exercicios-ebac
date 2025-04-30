function Animal(nome, cor, raca) {
    let _nome = nome
    let _cor = cor
    let _raca = raca    
    this.andar = function() {
        console.log(`${this.getNome()} está andando`)
    }

    this.getNome = function() {
        return _nome
    }
    this.setNome = function(nome) {
        _nome = nome
    }

    this.getCor = function() {
        return _cor
    }
    this.setCor = function(cor) {
        _cor = cor
    }

    this.getRaca = function() {
        return _raca
    }
    this.setRaca = function(raca) {
        _raca = raca
    }
}

function Cachorro(nome, cor, raca) {
    Animal.call(this, nome, cor, raca)

    this.latir = function() {
        console.log(`${this.getNome()} está latindo`)
    }
}

function Gato(nome, cor, raca) {
    Animal.call(this, nome, cor, raca)

    this.miar = function() {
        console.log(`${this.getNome()} está miando`)
    }
}

const cachorro = new Cachorro('Bidu', 'azul', 'Labrador')
const gato = new Gato('Mingau', 'branco', 'Siamês')

cachorro.andar()
cachorro.latir()
gato.andar()
gato.miar()