// importar libreria:toda la libreria que se llama express
//se metió en la variable const express
const express = require("express")
const db = require("./db")
/* ejemplo
const ana = require("ana")*/

//inicializamos express dentro de 
//variable app 
const app = express()
app.use(express.json())
//request, response

//endpoint GET /productos


app.get("/productos", (req, res)=>{

    res.json(db.productos)

})
//endpoint buscar por id
app.get("/productos/:id", (req, res)=>{
    //obtener variable id
    const idProduct = req.params.id
    
    const resultadoBusqueda = db.productos.find(producto => producto.id === Number(idProduct))
    res.json(resultadoBusqueda)

})
// endpoint delete
app.delete("/productos/:id", (req, res)=>{
    //obtener variable id
    const idProduct = req.params.id
    
    const validationProduct = db.productos.find(producto => producto.id === Number(idProduct))

    if(!validationProduct){
            res.status(404).json({
                message: "ID not found", code: "404"
            })
            return
        }

    db.productos = db.productos.filter(producto => producto.id !== validationProduct.id)
    res.json(db.productos)

})
app.post("/productos", (req, res)=>{
    const name= req.body.name
    const price=req.body.price
    const units= req.body.units || 0
        if(!name || !price){
            res.status(400).json({
                message: "Los campos Name y Price  son obligatorios"
            })
        }
    const id = db.productos.length + 1 

    let productoNuevo = {
        id: id , name: name , price: price, units: units 
    }

    db.productos.push(productoNuevo)
    res.json(db.productos)
}
)
app.put("/productos/:idProducto" , (req, res)=>{
    const idProducto= Number(req.params.idProducto)
    const indice = db.productos.findIndex(producto => producto.id === idProducto)
    if(indice<0){
        res.status(404).json(
            {
                message : "No existe elemento para actualizar"
            }
        )
    }
    const name= req.body.name
    const price= req.body.price
    const units = req.body.units

    let productoActualizado = {
        name,  price, units, id: idProducto
    }
    db.productos [indice] =productoActualizado
    res.json( db.productos)

})
app.listen(9000, ()=>{
    console.log("corriendo puerto 9000")
} )
app.get("/usuarios", (req,res)=>{
    res.json(db.usuarios)
})
app.get("/usuarios/:idUser", (req, res) =>{
    const idUsuario= Number(req.params.idUser)

    const ResultadoUsuario = db.usuarios.find(usuario => usuario.id === idUsuario)
    res.json(ResultadoUsuario)
})
app.delete("/usuarios/:idUser", (req, res) =>{
    const idUser = Number(req.params.idUser)
    ValidationUser = db.usuarios.find(usuario => usuario.id === idUser)
        if(!ValidationUser){
            res.status(404).json({
                message: "ID not found"
            })
        }
    db.usuarios = db.usuarios.filter(usuario => usuario.id !== ValidationUser.id)
    res.json(db.usuarios)
})
app.post("/usuarios", (req, res) =>{
    const name= req.body.name
    const lastname= req.body.lastname
    const email= req.body.email
   
      
        if(!name || !lastname || !email){
            res.status(400).json({
                message: "Todos los campos son requeridos"
            })
        }
        const id= db.usuarios.length + 1
    let usuarioNuevo = {
        id, name, lastname, email
    }
    db.usuarios.push(usuarioNuevo)
    res.json(db.usuarios)
})
app.put("/usuarios/:idUser", (req, res) =>{
    const idUser= Number(req.params.idUser)
    const index= db.usuarios.findIndex(usuario => usuario.id === idUser)

    if(index <0){
        res.status(404).json({
            message: "No hay datos para actualizar"
        })
    }
const name= req.body.name
const lastname= req.body.lastname
const email= req.body.email

    let actualizacionUsuario = {
        name, lastname, email, id : idUser
    }
    db.usuarios[index]= actualizacionUsuario
    res.json(db.usuarios)
})