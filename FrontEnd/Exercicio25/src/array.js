const times = ['Cruzeiro', 'Flamengo', 'São Paulo', 'Palmeiras', 'Santos', 'Vasco', 'Corinthians', 'Atlético Mineiro', 'Internacional', 'Grêmio']

for (let i = 0; i < times.length; i++) {
    console.log(`Time ${i+1}: ${times[i]}`)
}

times.forEach(function(time, indice) {
    console.log(`Time ${indice+1}: ${time}`)
})

const jogadores = ['Messi', 'Cristiano Ronaldo', 'Romário', 'Mbappé', 'Salah', 'Lewandowski', 'Kane', 'De Bruyne', 'Modric', 'Ronaldo Fenômeno']

const selecionados = jogadores.map(function(jogador){
    return {
        nome: jogador,
        posicao: 'Atacante',       
    }    
})

console.log(selecionados)

selecionados.push({
    nome: 'Lucio',
    posicao: 'Zagueiro',
})

const melhor = selecionados.find(function(jogador){
    return jogador.nome === 'Messi'
})

console.log(melhor)

const classificacao = selecionados.findIndex(function(jogador){
    return jogador.nome === 'Messi'
})

console.log(classificacao)

const posicao = selecionados.every(function(jogador){
    return jogador.posicao === 'Atacante'
})

console.log(posicao)

const titulares = selecionados.some(function(jogador){
    return jogador.posicao === 'Zagueiro'
})

console.log(titulares)

function jogadorDefesa(jogador) {
    return jogador.posicao === 'Zagueiro'
}

const defesa = selecionados.filter(jogadorDefesa)

console.log(defesa)

const penaltis = selecionados.reduce(function(total, jogador){
    total += `${jogador.nome} `
    return total
}, ' ')

console.log(penaltis)