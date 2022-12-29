// importar libreria:toda la libreria que se llama express
//se metió en la variable const express
const express = require("express")
/* ejemplo
const ana = require("ana")*/

//inicializamos express dentro de 
//variable app 
const app = express()
//request, response

//endpoint GET /productos
// id name   price  units
// 1  huevo    10    500
// 2  leche    25    200
let productos = [

    {id: 1, name: "huevo", price: 10, units: 500},
    {id: 2, name: "leche", price: 25, units: 200}
]
app.get("/productos", (req, res)=>{

    res.json(productos)

})
//endpoint buscar por id
app.get("/productos/:id", (req, res)=>{
    //obtener variable id
    const idProduct = req.params.id
    
    const resultadoBusqueda = productos.find(producto => producto.id === Number(idProduct))
    res.json(resultadoBusqueda)

})
// endpoint delete
app.delete("/productos/:id", (req, res)=>{
    //obtener variable id
    const idProduct = req.params.id
    
    const validationProduct = productos.find(producto => producto.id === Number(idProduct))

    if(!validationProduct){
            res.status(404).json({
                message: "ID not found", code: "404"
            })
            return
        }

    productos = productos.filter(producto => producto.id !== validationProduct.id)
    res.json(productos)

})
app.listen(9000, ()=>{
    console.log("corriendo puerto 9000")
} )