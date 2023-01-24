const arraynumeros = [1, 2, 3, 4]
const arratstrings = ["dato1", "dato2", "dato3", "dato4"]

let personas=[
    {
        id: 1,
        nombre: "Ana",
        lastname: "castro",
        edad: 26
    },
    {
        id: 2,
        nombre: "Anahi",
        lastname: "castrolo",
        edad: 28
    },
    {
        id: 3,
        nombre: "Angela",
        lastname: "caso",
        edad: 28
    }
]
let frutas=[
    "pera", "manzana", "guayaba"
]
let verduras= [
    "limon", "jitomate", "chiles", "limon", "limon", "jitomate"
]
//concat: une dos arays o añade elementos al array
//TEMPORAL
console.log(frutas.concat("lima"))
//PERMANENTE
frutas= frutas.concat("fresa")
console.log(frutas)
//union temporal de dos arrays
console.log(frutas.concat(verduras))

let variable= [...frutas , ...verduras]
console.log(variable)

//Every: obliga a que todos los elementos 
//del array cumplan una condicion


frutas.every(fruta => {
    console.log(fruta == "guayaba")
})

//otra forma
if(frutas.every(fruta => {fruta == "guayaba"
})){
    console.log("cumple")
}else{
    console.log("no cumple")
}

//some: nos dice cuales cumplen y cuales no
frutas.some( fruta=> {
    console.log(fruta ==="guayaba")
}
)

//filter= filtra el array y devuelve otro array con 
//las condiciones solicitadas
console.log("FILTER")

 verduras.filter(verdura => {
    console.log(verdura !== "jitomate")
    })
    
verduras.filter(verdura => {
    if(verdura.length <10){
        console.log("tiene menos de 10 items")
    }
})
verduras.filter(verdura => {
    if(verdura.length >3){
        console.log("tiene mas de 3 items")
    }
})
console.log("FILTER todos los que no sean jitomate")

console.log(verduras.filter(verdura => verdura !== "jitomate"))
//FIND: busca las coincidencias y muestra la primera
console.log("FIND")
console.log("FIND")
console.log("FIND")

console.log("FIND el primero que no sea manzana")

console.log(frutas.find(fruta => fruta !== "manzana"))

console.log("FIND el primero que sea CHILES")

console.log(verduras.find(verdura=> verdura === "chiles"))

console.log("encontrar a la persona con el id 1")

console.log(personas.find(persona => persona.id === 1))
console.log(personas.find(persona => persona.lastname === "castrolo"))

//FOR EACH: POR CADA ELEMENTO NOS RECORRE TODO EL ARRAY
console.log("FOR EACH")

console.log("reccore el array y trae los elementos que tienen mas de 5 letras")

console.log(verduras.forEach(verdura => {
    if(verdura.length>5){
        console.log(verdura)
    }
}))

//INCLUDE: ARROJA True o false en funcion de la existencia
//de ese elemento en el array
console.log("INCLUDE")
console.log("INCLUDE")

console.log("¿verduras incluye limon? true")
console.log(verduras.includes("limon"))
console.log("¿frutas incluye banana?: False")
console.log(frutas.includes("banana"))

//INDEXOF: NOS DICE LA POSICION QUE OCUPA UN DATO U OBJETO DENTRO
//DEL ARRAY, SI NO EXISTE DEVUELVE UN NUMERO NEGATIVO
console.log("INdexof")

console.log(frutas.indexOf("manzana"))
//JOIN
console.log("JOIN")

console.log(frutas.join(" , "))

//LASTINDEXOF
console.log("LAST INDEX OF")
//2
console.log(verduras.lastIndexOf("chiles"))
//5 aunque hay mas de 1, muestra solo el ultimo
console.log(verduras.lastIndexOf("jitomate"))

//propiedad LENGTH
console.log("PROPIEDAD LENGTH")
console.log(personas.length)
let casa= "departamento"
console.log(casa.length)


//MAP: itera arrays y arrays de objetos y devuelve un array
console.log("MAP")
personas.map(persona => {
    document.body.innerHTML+`
    <ul>
    <li>
        id:${persona.id}<br>
        nombre: ${persona.nombre}<br>
        lastname: ${persona.lastname}<br>
        age: ${persona.age}
    </li>
    </ul>`
    
    
    
})

console.log("POP")
//pop: elimina el ultimo elemento de un array y lo devuelve

console.log(verduras.pop())
console.log(verduras)

//push: agrega al final del array el nuevo elemento 
//que le indiqquemos y devuelve la longitud del array con el nuevo elemento

verduras.push("acelgas")
console.log(verduras)

let papeleria=[ "lapiz", "tijeras", "hojas", "colores", "pegamento"]
//Reduce: REDUCE EL ARRAY A UN SOLO ELEMENTO
console.log("REduce")
papeleria.reduce( pape => {console.log(pape)})

//ReVerse: devuelve el array invertido
console.log("REVERSE REVERSE REVERSE REVERSE")
//console.log(papeleria.reverse())

//SLICE: devuelve los indices comprendidos entre el primer
//indice que le indiquemos y el segundo no incluido
console.log("SLICE SLICE SLICE SLICE SLICE")
console.log(papeleria.slice(2,4))

//SORT: ORDENA EL ARRAY ALFABTICAMENTE
console.log("SORT SORT SORT")
console.log(papeleria.sort())

//UNSHIFT: agrega al princiìo del array el elemento que le 
//indiquemos

console.log("UNSHIFT")
console.log(frutas.unshift("lyche"))
console.log(frutas)


//SHIFT: elimina el primer elemento del array
 console.log("SHIFT SHIFT")
console.log(frutas.shift())
console.log(frutas)

//SPLICE: DA DOS ELEMENTOS ENTRE DOS INDICES PERO CON
//UN PRIMER INDICE LE 
//1. PONEMOS DESDE DONDE QUEREMOS QUE EMNPIECE A CONTARR
//2. CUANTOS ELEMENTOS VA A ELIMINAR O SUMAR
//3. si va a sumar los que vaya a añadir
console.log("SPLICE SPICE SPLICE")

console.log(papeleria)

//eliminar desde posicion 0, eliminar 3 y añadir "marcatextos"
papeleria.splice(0, 3, "marcatextos")

console.log(papeleria)


console.log(verduras)
//comenzar en 1, elimiar 0 y añadir aguacate y pimiento
verduras.splice(1, 0, "aguacate", "pimiento")
console.log(verduras)