
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

    asignacion: function(fn){
            
            return fn.apply(persona3) + "Sede de laburo: "+ this.sede1
        },
}

 //let datosCompletos= datosRecop.resumen.call(persona2)
// console.log(datosCompletos)

//EL objeto referenciado por el THIS SIEMPRE es el primer argumento

// let res= datosRecop.asignacion.apply(sedes, [datosRecop.resumen.call(persona3)])
// console.log(res)
// R: `Nombre completo: Daviz Perez edad: 23 Sede de laburo Guadalajara

//CON UN CALLBACK
let res= datosRecop.asignacion.apply(sedes, [datosRecop.resumen,1])
console.log(res)
// R: `Nombre completo: Daviz Perez edad: 23 Sede de laburo Guadalajara

 