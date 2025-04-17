function Pessoa(nome) {
    this.nome = nome
    this.falar = function() {
        console.log('Olá, meu nome é ' + this.nome)
    }        
}

function Funcionario(nome, cargo, salario) {    
    this.cargo = cargo
    let _salario = salario
    this.falarCargo = function() {
        console.log('eu sou ' + this.cargo)
    }    
    Pessoa.call(this, nome)
    this.getFalarSalario = function() {
        console.log('Meu salário é ' + _salario)
    }
    this.setAtribuirSalario = function(valor) {
       if (typeof valor === 'number' && valor > 0) {
            _salario = valor
        }
        else {
            console.log('Valor inválido')
        }
    }
}

const funcionario1 = new Funcionario('Maria', 'Desenvolvedora', 5000)
funcionario1.falar()
funcionario1.falarCargo()
funcionario1.setAtribuirSalario(7000)
console.log(funcionario1.getFalarSalario())