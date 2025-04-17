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

    this.getSalario = function() {
        return _salario
    }

    this.setSalario = function(valor) {
       if (typeof valor === 'number') {
            _salario = valor
        }
        else {
            console.log('Valor inválido')
        }
    }

    this.setPromocao = function() {
        const novoSalario = _salario * 1.1
        _salario = novoSalario        
    }
}

function Estagiario(nome) {
    Funcionario.call(this, nome, 'Estagiário', 2000)

    this.setPromocao = function() {
        const novoSalario = this.getSalario() * 1.07
        this.setSalario(novoSalario)
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, 'Gerente', 10000)

    this.setPromocao = function() {
        const novoSalario = this.getSalario() * 1.15
        this.setSalario(novoSalario)
    }
}

const funcionario1 = new Funcionario('Maria', 'Desenvolvedora', 5000)
const funcionario2 = new Estagiario('João')
const funcionario3 = new Gerente('Carlos')

funcionario1.setPromocao()
console.log(funcionario1.getSalario())
funcionario2.setPromocao()
console.log(funcionario2.getSalario())
funcionario3.setPromocao()
console.log(funcionario3.getSalario())