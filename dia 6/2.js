//CRIANDO LOOP
for (let i = 50; i >= 0; i -= 5){
    console.log(i)
}

//CRIANDO VÁRIAVEIS
let numero = parseInt(prompt("Digite um número inteiro e positivo"))
for (let i = numero; i <= numero + 2; i++){
    console.log("Tabuada do número: " + i)
    for (let j = 0; j <= 10; j++){
        console.log(i + "x" + j + " = " + (i * j))
    }
}