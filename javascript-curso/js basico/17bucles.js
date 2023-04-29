let timer= 0

//mientras timer sea menor a 20, sumar de uno en uno

// while(timer<20){
//     timer ++
//     console.log(`timer ${timer}`)
// }

//DO WHILE-HACER MIENTRAS, se ejecuta siempre minimo una vez
//primero hace y luego evalua

do{
    timer ++
    console.log(`timer ${timer}`)
}while(timer>20) 

let frutas= ["sandia", "melon", "pera"]

for(let i=0; i<frutas.length; i++){
    console.log(frutas[i])

}

//for of: recorremos un array y nos devuelve los elementos
for(const fruta of frutas){
    console.log(fruta)
}
//obtener los indices de los elementos del array
for(const fruta in frutas){
    console.log(fruta)
}

const person= {
    name: "Anna",
    lastmane: "Castro",
    age: 26,
    sign: "aries"
}
for(const propiedad in person){
    console.log(`key:${propiedad}, value: ${person[propiedad]}`)
}

const user= {
    name: "David",
    lastmane: "Zambri",
    age: 23,
    sign: "sagitario"
}

for(const property in user){
    console.log(`clave: ${property}, valor: ${user[property]}`)
}

console.log("MAP")

const herramientas= ["pala", "desatornillador", "llave", "martillo"]


function mayusculas (palabra){
    return palabra.toUpperCase()
}

let mayusHerramientas= herramientas.map(mayusculas)
for(const herramienta of mayusHerramientas){
    console.log(herramienta)
}