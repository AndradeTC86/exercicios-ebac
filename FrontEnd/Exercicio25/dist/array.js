"use strict";

var times = ['Cruzeiro', 'Flamengo', 'São Paulo', 'Palmeiras', 'Santos', 'Vasco', 'Corinthians', 'Atlético Mineiro', 'Internacional', 'Grêmio'];
for (var i = 0; i < times.length; i++) {
  console.log("Time ".concat(i + 1, ": ").concat(times[i]));
}
times.forEach(function (time, indice) {
  console.log("Time ".concat(indice + 1, ": ").concat(time));
});
var jogadores = ['Messi', 'Cristiano Ronaldo', 'Romário', 'Mbappé', 'Salah', 'Lewandowski', 'Kane', 'De Bruyne', 'Modric', 'Ronaldo Fenômeno'];
var selecionados = jogadores.map(function (jogador) {
  return {
    nome: jogador,
    posicao: 'Atacante'
  };
});
console.log(selecionados);
selecionados.push({
  nome: 'Lucio',
  posicao: 'Zagueiro'
});
var melhor = selecionados.find(function (jogador) {
  return jogador.nome === 'Messi';
});
console.log(melhor);
var classificacao = selecionados.findIndex(function (jogador) {
  return jogador.nome === 'Messi';
});
console.log(classificacao);
var posicao = selecionados.every(function (jogador) {
  return jogador.posicao === 'Atacante';
});
console.log(posicao);
var titulares = selecionados.some(function (jogador) {
  return jogador.posicao === 'Zagueiro';
});
console.log(titulares);
var jogadorDefesa = function jogadorDefesa(jogador) {
  return jogador.posicao === 'Zagueiro';
};
var defesa = selecionados.filter(jogadorDefesa);
console.log(defesa);
var penaltis = selecionados.reduce(function (total, jogador) {
  total += "".concat(jogador.nome, " ");
  return total;
}, ' ');
console.log(penaltis);