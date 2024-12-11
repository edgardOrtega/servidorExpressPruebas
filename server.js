const {agregarEquipamiento,obtenerEquipamiento,modificarNombre, eliminarEquipamiento} = require('./equipamiento')
const express = require('express')
const app = express()
app.use(express.json());

app.listen(3001, console.log("Servidor Encendido 3001"))

app.get("/equipamientos", async (req,res)=>{
    const equipamiento = await obtenerEquipamiento()
    res.json(equipamiento)
})

app.post("/equipamientos", async (req,res)=>{
    const {nombre} = req.body
    await agregarEquipamiento(nombre)
    res.send("equipamiento agregado con exito")
})


app.put("/equipamientos/:id", async(req, res) => {
    const { id } = req.params
    const { nombre } = req.query
    await modificarNombre(nombre, id)
    res.send("Equipamiento modificado con éxito")
  
})

app.delete("/equipamientos/:id", async(req, res) => {
    const { id } = req.params
    await eliminarEquipamiento(id)
    res.send("Eliminado el equipamiento con exito")
})