const temFome = prompt("Você está com fome? (sim/não)")
const temDinheiro= prompt("Você tem dinheiro?(Sim/não")
const restauranteAberto = prompt("O restaurante está aberto? (sim/não")

if (temFome === "nao" || temDinheiro == "nao"){
console.log("Hoje a janta será em casa");
}else if(temFome === "sim" && restauranteAberto === "sim"){
        console.log("Hoje o jantar será no seu restaurante favorito");
    }
    else{
        console.log("Peça um delivery!")
    }

