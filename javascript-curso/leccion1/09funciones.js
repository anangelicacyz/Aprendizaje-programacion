//funncion moderna anonima autoejecutable
//archivo se llama para ser ejecutado
(() => {
    console.log("buen dia")
})()


//funciones declaradas: 
console.log("FUNCIONES DECLARADAS")

function saludo(saludo){
    console.log(saludo)
}
saludo("hola")

function suma(suma){
    console.log(suma)
}
suma(3+4)



function ncompleto(nombre, apellido){
    console.log(`Mi nombre es ${nombre} ${apellido}`)
}
ncompleto("Ana", "Castro")

function datos(name, lastname){
    console.log(`name: ${name}; lastname: ${lastname}`)
}

let nametraido= "Pepita"
let lastnametraido= "Perez"
datos(nametraido, lastnametraido)

console.log("SUMA")
function suma(num1, num2){
    console.log(num1 + num2)
    
}

let nume1=23
let nume2= 3

suma(nume1, nume2)

console.log("RESTA")
function resta(num1, num2){
    return(num1-num2)

}

resta(nume1, nume2)

console.log("MULTIPLICACION")

function multiplicacion(num1, num2){
    num1*num2
    return
}
multiplicacion(nume1, nume2)

console.log("DIVISION")
function division(num1, num2){
    console.log(num1/num2)
}
division(nume1, nume2)

//FUNCIONES EXPRESADAS: no efecto hoisting


const movimiento = function(){
    console.log("Saltar")
}

movimiento()

let sumas= function(num1, num2){
    console.log(num1+num2)
}
let n1= 4
let n2= 5
let n3= 8

sumas(n1, n2)

let minus = function (a, b){
    console.log(a-b)
}
minus(n1, n2)

let multi = function (a, b){
    console.log(a*b)
}
multi(n1, n2)


//funciones flecha

const sumandoparams= (a, b) => console.log( a+ b)


sumandoparams(n1, n3)

//FUNCIONES AUTOEJECUTABLES
const saludo2= (function(){
    console.log("Buenas noches")
})()

//FUNCIONES flecha AUTOEJECUTABLES

const saludo3= (() =>{
    console.log("Buenas tardes")
})()



function calculaDerivada(fx){

    let resultadoFPrima
    // aca derivada
    return '3'
}


function calculaIntegral(fPrima){

    let fx
    // aca derivada
    return "3x+c"
}

let fx = '3x + 2'

let resultDeriv= calculaDerivada(fx)

console.log(resultDeriv)

let resulInteg= calculaIntegral(resultDeriv)

console.log(resulInteg)

function esPalindromo(text){
    let loEs
    console.log(esPalindromo)
    
// su codigo aqui ... vamos tu puedes

    return loEs
}

let frase= "Anita lava la tina"
const respuesta = esPalindromo(frase)

console.log(respuesta)







