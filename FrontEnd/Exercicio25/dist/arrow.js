"use strict";

var arrow = function arrow() {
  return 'Testando arrow function';
};
console.log(arrow());
var retornaCarro = function retornaCarro() {
  return {
    marca: 'Ford',
    modelo: 'Ka'
  };
};
console.log(retornaCarro());
var carro = {
  velocidade: 40,
  acelerar: function acelerar() {
    this.velocidade += 10;
  },
  frear: function frear() {
    _this.velocidade -= 10;
  }
};
carro.acelerar();
console.log(carro.velocidade);
carro.frear();
console.log(carro.velocidade);