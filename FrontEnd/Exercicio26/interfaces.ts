class Conta {
    numeroConta: number
    saldo: number = 0

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta
    }    
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor
    }
}

interface IContaCorrente {
    transferir: (valor: number, destinatario: Conta) => boolean
    taxaTransferencia: number
}

class ContaCorrente extends Conta implements IContaCorrente {
    taxaTransferencia: number = 0.1

    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia)
        return true
    }
}
