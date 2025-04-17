function Pessoa(nome) {
    this.nome = nome
    this.falar = function() {
        console.log('Olá, meu nome é ' + this.nome)
    }        
}

function Funcionario(nome, cargo, salario) {    
    this.cargo = cargo
    this.salario = salario

    this.falarCargo = function() {
        console.log('eu sou ' + this.cargo)
    }    
    Pessoa.call(this, nome)
}

const funcionario1 = new Funcionario('Maria', 'Desenvolvedora', 5000)
funcionario1.falar()
funcionario1.falarCargo()