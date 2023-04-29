//asincronia: empiezo la tarea y esta tarda un tiempo
//mientras llega la respuesta de algo se sigue trabajando

//SET TIME OUT UTILIZA CALLBACKS
// function saludar (){
//     console.log("hola mundo")
// }

// setTimeout(saludar, 2000)

// setTimeout(function(){console.log("Perrito")}, 3000)

// setTimeout(()=>{console.log("gatito bonito")}, 4000)


//EJEMPLO CALLBACK ASINCRONO 

const url1= "wmedia.es/juan.jpg"

const url2= "wmedia.es/pedro.jpg"

const url3= "wmedia.es/jose.jpg"

function descargar(url, callback){
    console.log(`Descargando ${url}`)

    setTimeout(function(){
        //fingimos tara
        console.log(`descargado con exito ${url}`)
    
        callback(url)
    
    }, 3000)

}

// function procesar(archivo){
//     console.log(`archivo ${archivo} procesando`)
// }

descargar(url1, function(archivo){
    console.log(`archivo ${archivo} procesando`)
})

descargar(url2, function(archivo){
    console.log(`archivo ${archivo} procesando`)
})
descargar(url3, function(archivo){
    console.log(`archivo ${archivo} procesando`)
})
