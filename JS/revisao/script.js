let senha = 0000 //number

let nome = "Fulano"//string

let user = "fulano12"

user = "fulano_dev"
console.log(user)

const cpf = 24681357 //number

const termoDeUso = true // boolena

 // Operadores de Comparação

 /*
 = atribui valo
 == compara se é igual o conteudo
 === compara se é igual o tipo e conteudo
 > se o valor é maior que outro
 < se o valor é menor que outro
 >= se o valor é maior ou igual a outro
 <= se o valor é menor ou igual a outro
 */

 let number = "2"

 console.log(number == 2)

 // Condições
/*
 if(condição){
    console.log("retorno")
 }
*/
 let totalCompra = prompt("Digite o valor da sua compra")

 if(totalCompra >= 20){
     alert("Frete Grátis!!!")
 }else{
     alert("Precisa pagar frete")
}
//Atividade 1 - Criar condição composta por uma variável dia e verifica se está de dia ou não
let dia = true

if(dia==true){
   console.log("Está de dia")
}else{
   console.log("Está de noite")
}

//Atividade 2:Verifica temperatura, se > 30 ("Está muito quente"), do contrário ("Está muito agradável a temperatura")
let temperatura = 25

if(temperatura > 30){
    console.log("Está muito quente")
}else{
    console.log("Está agradável a temperatura")
}

//Atividade 3: Verificação de faixa étaria, se < 12 (Criança), se entre 12 e 18 (adolsecente), sr entre 19 e 60 (Adulto), se a partir de 61 (Idoso)
let idade = 21

if(idade < 12){
    console.log("Criança")
}else if(idade <= 18){
    console.log("Adolescente")
}else if(idade <= 60){
    console.log("Adulto")
}else{
    console.log("Idoso")
}

