const { agregarViaje, obtenerViajes, modificarPresupuesto, eliminarViaje } = require("./consultas")
const express = require("express")
const app = express()
app.use(express.json())

app.listen(3000, console.log("SERVIDOR ENCENDIDO 3000"))

app.get("/viajes", async (req, res) => {
  const viajes = await obtenerViajes()
  res.json(viajes)
})

app.post("/viajes", async (req, res) => {
    const { destino, presupuesto } = req.body
    await agregarViaje(destino, presupuesto)
    res.send("Viaje agregado con éxito")
})


// ===============================   PARTE 2     ====================0===============

app.put("/viajes/:id", async (req, res) => {
  const { id } = req.params
  const { presupuesto } = req.query
  await modificarPresupuesto(presupuesto,id)
  res.send("Presupuesto modificado con éxito")
})

app.delete("/viajes/:id", async(req,res) =>{
  const {id} = req.params
  await eliminarViaje(id)
  res.send("Viaje eliminado con exito")
})