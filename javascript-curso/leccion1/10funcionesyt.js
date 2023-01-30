// function saludar(){
//     console.log("Hola")
// }
// saludar()
// saludar()

// const saludar = function (){
//     console.log("Aca")
// }
// saludar()

const saludar= () => {
    console.log("Hola perro")
}
saludar()

const saludando= (name) => {
    console.log(`Hola ${name}`)
}
saludando("jose")
saludando("Ana")
saludando("Perico")
saludando("Jimena")

//Con return explicito
const upperCase= (word) => {
    return word.toUpperCase()
}
let respuesta  = upperCase("perro")
console.log(respuesta)


//Con return implicito

const toLower = (text) => text.toLowerCase()

let res= toLower("ANA")
console.log(res)

res= toLower("Pedro")
console.log(res)

res= toLower("JOSE")
console.log(res)

 res= toLower("DAVID")
console.log(res)

//Diferencia entre parametros y argumentos
console.log("ESTABLECER VALORES PARA LOS PARAMETROS POR DEFECTO")

function user (name = "querido", lastname= "amigo"){
    console.log(`Bienvenide ${name} ${lastname} `)
}
user("Ana", "castro")
user()

//PARAMETROS REST
console.log("PARAMETROS REST")

function checkout(pr1, pr2, pr3, pr4, pr5){
     return pr1+pr2+pr3+pr4+pr5
    
}
let total=checkout(4, 6, 8, 1, 3)
console.log(total)

function checkout2(...prices){
    return prices.reduce((acc, curr) => acc+ curr);
   
}


let total2=checkout2(4, 6, 8, 1, 10)
console.log(total2) //29

total2= checkout2(4, 6, 8, 1, 10, 49, 56, 3, 5, 10)
console.log(total2)

function reduce (...values){
    console.log(arguments)
    return values.reduce((acc, curr) => acc-curr)
    //OPCION LARGA
    // const totales= values.reduce(function(acc, curr){
    //     return acc - curr
    // })
    // return totales
}
let resta = reduce(4, 3, 2)
console.log(resta)

resta = reduce(4, 3, 2, 2, -10)
console.log(resta)