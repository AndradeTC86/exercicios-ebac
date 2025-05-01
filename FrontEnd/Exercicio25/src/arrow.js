const arrow = () => 'Testando arrow function'
console.log(arrow())

const retornaCarro = () => ({    
        marca: 'Ford',
        modelo: 'Ka',        
})
console.log(retornaCarro())

const carro = {
    velocidade: 40,
    acelerar: function() {
        this.velocidade += 10
    },
    frear: () => {
        this.velocidade -= 10
    }
}

carro.acelerar()
console.log(carro.velocidade)
carro.frear()
console.log(carro.velocidade)
