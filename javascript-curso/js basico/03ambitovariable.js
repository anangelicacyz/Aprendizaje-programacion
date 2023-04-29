
//Desde que sitios de mi codigo 
//puedo acceder a una variable

//superglobal: acceso desde 
//cualquier archivo
//global: acceso desde cualquier sitio de un archivo

let mascota= "perro"
console.log(mascota)

//local: acceso dentro de una funcion

function correr(){
    var deporte= "corredor"
}
correr()

//undefined porque el ambito global
//no la conoce
//console.log(deporte)


//bloque: = dentro de un bucle como un if
let nombre= "ana"
if(nombre=== "ana"){
    let apellido= "castro"
    //mascota al ser global puede llamarse
    //desde cualquier lado
    console.log(mascota)
}
//no la reconoce
//console.log(apellido)