// let variavel = "olá" >>>>> pode apenas ter um valor
// let array = ["olá", "oi"] >>>>> mais de um valor
//let objeto = {dia: "lindo", noite: "fria"} >>>> vários itens que podem ser organizados

//Array []
let dias = ["Segunda","Terça","Quarta","Quinta","Sexta"]
console.log(dias,[4])

let carrinho = ["Notebok","Controle Video Game"]
console.log(carrinho,[1])

let filmes = ["Shrek","Top Gun","Transformers","Abracadabra"]

filmes.shift()
filmes.push("Titanic")
filmes.unshift("Barbie")
//Objetos {}, cada conteúdo dentro do {} forma um objeto

const cadastro = [{
    nome:"Maria",
    telefone:29421043,
    senha: 123456,
    confirmacao:123456,
},
{
    nome:"Ana",
    telefone:71862485,
    senha: 642135,
    confirmacao:642135,
},
{
    nome:"Carlos",
    telefone:057117,
    senha: 123456,
    confirmacao:123456
}
]
console.log(cadastro[1],telefone)
cadastro.push(    {nome:"Jose",telefone:159753,senha: 123456,confirmacao:123456})
console.log(cadastro)
cadastro.slice(0,1)
console.log(cadastro)
// Add propriedade no objeto
cadastro.cpf = 0000000
console.log(cadastro)

//Excluir propriedade

delete cadastro.confirmacao
console.log(cadastro)