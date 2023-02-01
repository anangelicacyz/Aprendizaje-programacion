// function aleatorio (){
//      let valor= Math.random()
//     //console.log(valor)
//      function doble(){
//         const total= valor *2
//         return total
//      }
//      return doble()
// }

// let valor=aleatorio()
// console.log(valor)

// console.log("Closure")

// function soyClosure (){
//     const variableLocal= "ANA"
//     return function(){
//         return variableLocal.toUpperCase()
//     }
// }

// const closure = soyClosure()
// console.log(closure())


//sin closure
function pedido (id, pizza){
    const ordenPedido= `${id}_${pizza}`
    return ordenPedido
}
//un ingrediente
const idp= 123456
const ingrediente= "salami"
let pedidoaca= pedido(idp, ingrediente)
console.log(pedidoaca)

//con closure
//muchos ingredientes, mismo cliente
console.log("Con closure")

function pedirPizzaID(uid){
    const pedi= `Pedido-${uid}`
    return function (pizza){
        return `${pedi}_ingredientes:${pizza}`
    }
}
    let pedidouid= pedirPizzaID(98765432)

    console.log(pedidouid("chorizo"))

    console.log(pedidouid("camaron"))

    console.log(pedidouid ("peperoni"))

console.log("CLOSURE CON ARRAY")

function pedido2(id){
    const pedido2= `Pedido-Cliente:${id}`
    
    
    return function pizzaid2(...ingred){
        console.log(ingred)
        let ingredientes= ingred.join("*")
        console.log(ingredientes)
    
        return `${pedido2}- ingredientes: ${ingredientes}`

    }

}
let pedidoID= pedido2(65432123456)

let detallesPedido= pedidoID("peperoni", "salami", "chorizo")

console.log(detallesPedido)