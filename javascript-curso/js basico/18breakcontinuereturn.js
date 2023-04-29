const animales= ["perro", "gato", "ganso", "caballo", "conejo", "oso"]

//BREAK: en donde esta corta la ejecucion del programa

for(let i= 0; i<animales.length; i++){
    
    if(i===3){
        break
    }else{
        console.log(animales[i])
    }
}
//Consola:
// perro
// gato
// ganso

//CONTINUE: rompe la ejecucion en donde se le indica
//pero en forma de salto, y continua con lo siguiente

for(let i= 0; i<animales.length; i++){
    
    if(i===3){
        continue;
    }else{
        console.log(animales[i])
    }
}
//Consola:
// perro
// gato
// ganso
//conejo
//oso
//Se saltò la tercer posicion




