"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} diz olá!`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    static retornaNumeroBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 1.5;
    }
}
const conta1 = new ContaPessoaFisica(1234);
console.log(ContaBancaria.retornaNumeroBanco());
conta1.depositar(1000);
console.log(conta1);
