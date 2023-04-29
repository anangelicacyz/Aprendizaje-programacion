// (function (){
//     console.log("Hey")
// })()

// (function (name){
//     console.log(`Hey ${name}`)
// })("David")

// for(let i=0; i<=10; i++){

// (function(i){
//     setTimeout(function(){
//         console.log("El numero es" + i)
//     }, 1000)
// })(i)   
// }

//patronn de modulo (ya no se usa)

const name= "juan"
let distance= 0

function greet(){
    console.log(`Hola ${name}`)
}

function run(){
    distance ++

    console.log(`${name} run ${distance} km`)
    
}
run()


const crearPersona= function (person){
    const name= person || "David"
    let distance= 0
    
    function greet(){
        console.log(`Hola ${name}`)
    }
    
    function run(){
        distance ++
    
        console.log(`${name} run ${distance} km`)
    }  
    return  {
        greet, run
    } 
}
const person = crearPersona('ana')
person.greet()
person.run()