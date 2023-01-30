

console.log("cargo Js madafaka")

// global document


let btnEnviar = document.getElementById('btn-enviar')


btnEnviar.addEventListener('click',(event)=>{

    let valorInput= document.getElementById(`input-frase`).value
    
let res= document.getElementById(`resultado`)

function esPalindromo(phrase){
    //minusculas
    let lowerphrase= phrase.toLowerCase()
    //quitar espacios
    let phrase1= lowerphrase.replaceAll(" ", "")
    //frase 2
    let phrase2= ""
    const max= phrase1.length -1
        for(let i= max; i>= 0; i--)
        phrase2 += phrase1[i]

    return phrase1 === phrase2

}

let resPhrase = esPalindromo(valorInput)
 
if(resPhrase){
    
    res.innerHTML= "La frase es palindroma"
}
else{
    res.innerHTML= "La frase no es palindroma"
}


})

