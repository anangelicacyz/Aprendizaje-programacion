function user (name, ...prices){

    const total= prices.reduce((acc, curr) =>{
            return acc+ curr
    })
    console.log(total)
    return `${name} gastó un total de ${total} pesos`
}

let todo= user("Ana", 3, 4, 5, 6)
console.log(todo)


todo= user("David", 3, 4, 5, 6, 500)
console.log(todo)


//Return implicito

const ahorro = (inicial, ...gasto) =>{
    //al ejecutar la funcion flecha en una linea no requiere return explicito
    //por lo que se puede sacar la variable total sin problemas
    //sin {} despues de la flecha
    const total= gasto.reduce((acc, curr) => acc + curr);

    console.log(total)
    
    let data= inicial-total
    return `Su ahorro fue de ${data}`
}
let ahorrototal= ahorro(5000, 500, 50, 100)
console.log(ahorrototal)