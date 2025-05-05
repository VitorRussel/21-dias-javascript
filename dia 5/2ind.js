let valor
let quantidade

let opcao = prompt("bem-vindo ao posto, o que o senhor deseja? " + "\n1 = abastecer com gasolina; \n2 = abastecer com disel; \n3 = calibrar os pneus");

switch (opcao){
    case "1":
        valor = parseInt(prompt("Diga o valor que deseja abastecer"))
        quantidade = valor / 5
        console.log("Foram abastecido" + quantidade + "L de gasolina")
        break;
        case "2":
            valor = parseInt(prompt("Diga o valor que deseja abastecer"))
            quantidade = valor /3
            console.log("Foram abastecido" + quantidade + "L de disel")
            break;
            default:
                console.log("Pneus calibrados com sucesso.")
                break;
}