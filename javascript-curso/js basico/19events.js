//eventos: interaccion del usuario con la pagina como el click a un boton

// const boton= document.querySelector(`button`)
// const body= document.querySelector(`body`)



// //el usuario redimensiona la pagina
// window.addEventListener(`resize`, (event)=>{
//     body.style.backgroundColor= `green`
//     body.style.width= `100%`

// })
// const formulario= document.getElementById(`form`)

//formulario a la escucha para cuando se haga foco en 
//èl, entonces su color de fondo sea pink

// formulario.addEventListener(`focus`, (event)=> {
//     formulario.style.backgroundColor=`pink`
// })

//formulario a la escucha para cuando se quite atencion
//a èl entonces su background cambie a blanco
// formulario.addEventListener(`blur`, (event)=>{
//     formulario.style.backgroundColor=`white`
// })
//choca con el blur, podria ir en un if else que si pasa algo pase el blur y si no el change

// formulario.addEventListener(`change`, (event)=>{
//     formulario.style.backgroundColor=`red`
// })

// boton.addEventListener(`click`, (event)=>{
//     alert(`logrado`)
// })

// formulario.addEventListener(`focus`, resaltarForm)
// formulario.addEventListener(`blur`, quitarFoco)

// function resaltarForm (){
//     formulario.style.height=`100px`
// }

// // function quitarFoco (){
// //     formulario.style.height=`auto`
// // }

// const parrafo= document.querySelector(`p`)
// //const boton= document.getElementById(`btn-sumar`)

// // let contador= 0


// // boton.addEventListener(`click`, (event)=>{
// //     console.log(`nice`)
// //     contador++
// //     parrafo.textContent = `resultado = ${contador}`
// //})

// const input= document.querySelector(`input`)

// input.addEventListener(`change`, (event)=>{
//     parrafo.textContent= event.target.value
// })

// input.addEventListener(`mouseenter`, (event)=>{
//     input.style.backgroundColor= `pink`
// })
// input.addEventListener(`mouseleave`, (event)=>{
//     input.style.backgroundColor= `white`
// })

const p= document.querySelector(`p`)
p.classList.add(`texto`)
p.classList.add(`description`)

p.addEventListener(`click`, (event)=>{
    p.innerHTML = `<h1>Sí cambió</h1>`
})

p.classList.remove(`texto`)
