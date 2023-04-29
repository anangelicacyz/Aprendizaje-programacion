`use strict`

// function saludar (){
//     console.log(this)
// }
// saludar()
//undefined
// let name= "Ana"

// function greet(){
//     console.log(this.name)
// }

// greet()
// //Ana

// console.log("CAMBIO VALOR THIS DINAMICAMENTE")
// let nombre= "David"

// const persona= {
//     nombre: "Perico",
//     apellido: "Perez",
//     edad: 23
// }

// function heyyo(){
//     console.log(this.nombre)
// }
// function edaddoble(){
//     console.log(persona.edad*2)
// }
// function saludoCompleto(horario){
//     console.log(`${horario} ${this.nombre} ${this.apellido}`)

// }


// heyyo.call(persona)
// edaddoble.call(persona)
// saludoCompleto.apply(persona, ["Buenas madrugadas"])


console.log("EJEMPLO APPLY")
const persona1= {
    nombre: "Perico",
    apellido: "Perez",
    edad: 21,
    sede1: "Pereira",
}
const persona2 = {
    nombre: "Ana",
    apellido: "Hdez",
    edad: 23,
    sede1: "Paris",
}
const persona3 = {
    nombre: "Daviz",
    apellido: "Perez",
    edad: 23,
    sede1: "Bogotá"

}

const sedes= {
    sede1: "Guadalajara",
    sede2: "Zapopan"
}
//console.log(sedes.sede2)

const datosRecop = {
    resumen:   function(){
        //console.log(`Nombre completo: ` + this.nombre + ` `+this.apellido+ ` edad: `+ this.edad)
        return `Nombre completo: ` + this.nombre + ` `+this.apellido+ ` edad: `+ this.edad},

    asignacion: function(dataPersona){
            
            return dataPersona + "Sede de laburo: "+ this.sede1
        },
}

 //let datosCompletos= datosRecop.resumen.call(persona2)
// console.log(datosCompletos)

//EL objeto referenciado por el THIS SIEMPRE es el primer argumento
let res= datosRecop.asignacion.apply(sedes, [datosRecop.resumen.call(persona3)])
console.log(res)
// R: `Nombre completo: Daviz Perez edad: 23 Sede de laburo Guadalajara

 let res1= datosRecop.asignacion.apply(sedes, [datosRecop.resumen.call(persona1)])
 console.log(res1)
// R: `Nombre completo: Perico Perez edad: 21 Sede de laburo Guadalajara

