class Pessoa {
    nome: string
    renda?: number 

    constructor(nome: string, renda?: number) {
        this.nome = nome
        this.renda = renda
    }

    dizOla() : string {
        return `${this.nome} diz olá!`
    }
}

class ContaBancaria {
    protected saldo: number = 0
    numeroConta: number

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta
    }

    static retornaNumeroBanco() {
        return 125
    }

    private getSaldo() {
        return this.saldo
    }

    depositar(valor: number) {
        this.saldo += valor
    }
}

class ContaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 1.5
    }
}

const conta1 = new ContaPessoaFisica(1234)
console.log(ContaBancaria.retornaNumeroBanco())
conta1.depositar(1000)
console.log(conta1)


