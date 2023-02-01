// if else simple
let frio=false

if(frio){
    console.log("Abrigado")
}
else{
    console.log("Liberado")
}

//if(si) else-if(y si no si) else(si noo)
let oferta;
let hora=16

// if (hora>=8 && hora <=12){
//     console.log(oferta= 10)
// }
// else if(hora>=13 && hora<= 19){
//     console.log(oferta= 20)
// }
// else{
//     console.log(oferta= 40)
// }

//OPERADOR TERNARIO

hora>=8 && hora<=12 ? console.log("El cafe en oferta"):null
hora>=13 && hora<=17 ? console.log("No hay cafe"):null
hora>=18 && hora<=23 ? console.log("El cafe es de olla"):null

let num=3
num>=3 && num<=10 ? console.log("Num si"):console.log("No")

let name= "ana"
let lastname;

num && lastname ? console.log("Si hay datos"): console.log("no hay datos")
num || lastname ? console.log("Si hay datos"): console.log("no hay datos")


//SWITCH CASE
console.log("SWITCH-CASE")
let edad= 19

switch(edad){
    case 18:  
            console.log("Apto para ver")
    break;
    case 19:
            console.log("Apto para comprar")
    
    break;       
    case 20:
            console.log("Socio")
    break;
    default:
        console.log("No apto")

}