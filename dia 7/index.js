//criando variáveisd
let mediageral = 0
let qtdHomens = 0
let qtdMulhersAcimaDe7 = 0
let notaDosHomens = 0
let contador = 1

//Notas_sexo
while (contador <= 10){
    nota = parseInt(prompt("Digite a nota do " + contador + " aluno"))
    sexo = prompt("Digite o sexo do aluno (m/n")
    if(sexo == "m") {
        if (nota > notaDosHomens){
            notaDosHomens = nota
        }
        qtdHomens ++
    }

if (sexo == "n" && nota > 7){
    qtdMulhersAcimaDe7++
}
mediageral += nota
contador++
}

mediageral = mediageral /10
console.log("A media hgeral dos alunos foi: " + mediageral);
console.log("A quantidade de homens cadastrado foi: " + qtdHomens);
console.log("A quantidade de mulher acima da média foi: " + qtdMulhersAcimaDe7);
console.log("A quantidade de homens acima da média foi; " + notaDosHomens);