//CRIANDO VARIAVEIS
let num1 = parseInt(prompt("escolha um numero"))
let num2 = parseInt(prompt("Escolha outro numero"))
let opcão =parseInt(prompt("Escolha qual calculo deseja realizar:" + "\n1 = +; \n2 = -; \n3 = *; \n4 = %"))

//criando switchcase
switch(opcão){
    case 1 :
        console.log(num1 + "+" + num2 + "+" + (num1 + num2))
        break;
        case 2:
            console.log(num1 + "-" + num2 + "-" + (num1 - num2))
            break;
            case 3:
                console.log(num1 + "*" + num2 + "*" + (num1 * num2))
                break;
                console.log(num1 + "%" + num2 + "%" + (num1 % num2))
                break;
       
}
