class Pokemon {
    #hp = 100

    constructor(nomePokemon, tipoPokemon) {
        this.nome = nomePokemon
        this.tipo = tipoPokemon
    }

    atacar(nomeAtaque) {
        console.log(`${this.nome} atacou com ${nomeAtaque}`)
    }

    receberDano() {
        this.#hp -= 10
        console.log(`${this.nome} recebeu dano, HP: ${this.#hp}`)
    }

    exibeHp() {
        console.log(`HP: ${this.#hp}`)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico')
    }
    atacar(){
        console.log(`${this.nome} atacou com Choque do Trovão`)
    }
}

const pikachu = new Pikachu()
pikachu.receberDano()
pikachu.exibeHp()
pikachu.atacar()
