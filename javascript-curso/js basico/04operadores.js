//comparacion
// < > >= <= == === != !==

console.log(5>4)
console.log(4<5)
console.log(45>= 44)
console.log(3== 3)
console.log(3===3)
console.log(4 != 7)
console.log(4!==6)
//aunque esta entre comillas se hace referencia 
//al valor
console.log(2 == "2")
//true
console.log(4=== "4")
//false

let edadAna=34
let edadMiriam= 50
let edadDavid=30
let edadSonny= 30
let edadJuana= "34"

if(edadAna == edadJuana){
    console.log("misma edad")
}

if(edadDavid === edadSonny){
    console.log("igual edad")
}
if(edadDavid< edadJuana){
    console.log("David menor que Juana")
}
if(edadSonny>edadJuana){
    console.log("si")
}
else{
    console.log("no se cumple")
}
if(edadJuana >= edadAna){
    console.log("es mayor o igual")
}
if(edadJuana <= edadDavid){
    console.log("si")
}
else{
    console.log("no")
}
if(edadJuana === edadDavid){
    console.log("si")
}
else{
    console.log("no")
}

//operadores aritmeticos
// suma, resta, multiplicacion, division
console.log(2 + 3)
console.log(2 - 3)
console.log(2 * 3)
console.log(2 / 3)
console.log(6% 3)


//operadores logicos
//! negacion
// && and
// or || artgr + <>

let lapiz= "azul"
if(lapiz){
    console.log("tiene valor")

}
let perro;
if(!perro){
    console.log("no tiene valor")
}
if(lapiz && perro){
    console.log("ambos tienen valor")
}
else{
    console.log("uno de ellos no tiene valor")
}
if(lapiz|| perro){
    console.log("uno de ellos tiene valor")
}
if(!perro && lapiz){
    console.log("cumplen")
}