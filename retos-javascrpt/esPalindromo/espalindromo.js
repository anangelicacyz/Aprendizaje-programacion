function esPalindromo(texto){
    //cambiar a minusculas
  let frase1= texto.toLowerCase()
 //quitar espacios
    frase1=frase1.replaceAll(" ", "")
//crear una segunda frase para comparar
let fraserev="";
let max= frase1.length-1

     for(let i= max; i>= 0; i--){
        fraserev = fraserev + frase1[i]
     }
//Comparar frases
    const esPali = frase1=== fraserev

    return esPali
    
     if(esPali){
        return true
     }
     else{
        return false
     }

}


let frase= "Anita lava2 la tina"
let respuesta= esPalindromo(frase)
console.log(respuesta, "wtf")
if(respuesta){
    console.log("La frase es palindromo")
}
else{
    console.log("No es palindromo")
}