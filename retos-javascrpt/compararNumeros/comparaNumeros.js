
let btnComparar = document.getElementById("btn-comp")

btnComparar.addEventListener(`click`, (event) => {

    let num1=document.getElementById(`num1`).value
    let num2=document.getElementById(`num2`).value

res= document.getElementById(`response`)

function comparacion(a,b){

    if(a>b){
    return `${a} es mayor que ${b}`
    }
    else if(a===b){
    return  `${a} es igual a ${b}`
    }
    else{
    return  `${a} es menor que ${b}`
    }
}

let resultado= comparacion(num1, num2)

    res.innerHTML= resultado

})