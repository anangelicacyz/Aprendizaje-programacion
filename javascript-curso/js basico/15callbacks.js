// function mifuncion(fn){
//     let a = fn()
//     return a
// }

// function saludar(){
//     return "Hola"
// }
// //opc unoo
// let res= mifuncion(saludar)
// console.log(res)

// //opc 2 con fun flecha
// let resp= mifuncion(() => "Hola")
// console.log(resp)
//--------------------------------------
// function saludar (nombre){
//     alert (`Hola ${nombre}`)
// }
// function obtenerNombre (fn ){
//     const nombre= prompt("Introduce tu nombre")
//     fn(nombre)
// }

// obtenerNombre(saludar)

// const nombre= obtenerNombre()
// saludar(nombre)

// let nums = [1, 2, 3, 4, 5, 6]

// const pares= nums.filter(num => num% 2 === 0)

// console.log(pares)

//orden superior: recibe argumentos, entre ellos la fn
//callback es la funcion que se llama como argumento
//de la fn de orden sup 


function comparar(numA, numB){
    return numA>numB
}

function RespuestaComp( a, b, callback){
    
   return callback(a, b)

}

let resc= RespuestaComp(2, 5, comparar )
    console.log(resc)

    if(resc){
    console.log("El primer numero es mayor que el segundo")
}else{
    console.log("El primer numero es menor que el segundo")
}


let UserServices = {
    crear : function(req, res){

    },
    read: function(){

    },
    update:function(){

    },
    delete:function(){

    }
}

app.post('/usuarios', UserServices.crear)
app.get('/usuarios', UserServices.read)
app.put('/usuarios', UserServices.update)
app.delete('/usuarios', UserServices.delete)


app.post('/usuarios', function(req, res){

})
 
