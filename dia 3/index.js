//declaração de variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//solicitando informação do usuario
nome = prompt("digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseInt(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso"))

//calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 0
AnoNasc = 2025 - idade

let imc = 0
imc = peso / (altura * altura)

//exibindo o resultado

console.log("Olá" + nome + "voce tem" + idade + "anos, naceu em" + anoNasc + ", tem" + altura + " de altura, pesa" + peso + "kg e seu IMC é" + imc + "kg/m")