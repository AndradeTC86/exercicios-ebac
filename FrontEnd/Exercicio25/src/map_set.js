//Map
let pessoa = new Map()
pessoa.set('nome', 'Lucas')
pessoa.set('idade', 25)
pessoa.set('profissao', 'programador')
pessoa.set('stack', 'html, css, js')

console.log(pessoa.get('nome'))

console.log(pessoa.size)

console.log(pessoa.has('stack'))

for (let [chave, valor] of pessoa.entries()){
    console.log(`Chave: ${chave}, Valor: ${valor}`)
}

pessoa.delete('idade')
console.log(pessoa.size)

//Set

const cpfs =new Set()

cpfs.add('21210523051')
cpfs.add('54767232007')
cpfs.add('91996236091')
cpfs.add('40445726075')
cpfs.add('64894015099')
cpfs.add('71580264000')

cpfs.forEach((cpf) => {
    console.log(cpf)
})

const arrayNomes = ['João', 'Lucas', 'Ana', 'Maria', 'Pedro', 'Lucas']

const arraySet =new Set([...arrayNomes])

const arraySemDuplicados = [...arraySet]

console.log(arraySet)
console.log(arraySemDuplicados)
