let nome = "bia"

let carrinho = ["arroz","banana", "chá verde", "couve"]

let series = ["Mr.Robot", "One Piece", "Xogún", "Supernatural"]

// métodos de manipulação de array
//pop(retira último item), push(adiciona item na última posição), shift(retira item do início), unshift(adiciona item no início)
series.pop()
console.log(series)

series.push("Pinguim")
console.log(series)

series.shift()
console.log(series)

series.unshift("The Boys")
console.log(series)

//splice (remove as posições que forem informadas (apartir da posição x, remove a quantia y

series.splice(1,1, "Flash", "Wandavision")
console.log(series)

//slice(remove as posições que forem informadas (apartir da posição x, até distância y) dee criar nova variável)

let novaSeries = series.slice(0,3)
console.log(novaSeries)

//sort, ordena de orrdem crescente

let numeros = [5,2,9,4,6,3,14,7,30]
numeros.sort()
console.log(numeros)

//Objeto => cria várias inforamações em um lugar
let alunos = [{
    nome: "pessoa",
    idade: 30,
    profissao: "Caixa",
    cpf:0000000
},
{
    nome: "fulana",   idade: 20,
    profissao:"Caixa",cpf:11111111
}
]