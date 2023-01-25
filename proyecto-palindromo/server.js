const express = require("express")

const app= express()
app.use(express.json())

app.post("/palindromo", (req, res) =>{

    let frase1= req.body.frase
    //todo a minusculas
    let frase= frase1.toLowerCase()
    //quitar espacios
    frase= frase.replaceAll(" ", "")
    //sacarsegundafrase
    const max= frase.length-1
    let fraseinvertida=""

        for(i=max; i>=0; i--){
            fraseinvertida += frase[i]
        }
    if(frase=== fraseinvertida){
        res.json({
            text: frase1, 
            message: `Es una frase palindroma`
        })
    }
    else{
        res.json({
            text: frase1,
            message: `No una frase palindroma`
        })
    }

})
const port= 9000
app.listen(port, ()=>{
    console.log(`Application running on port ${port}`)
})



