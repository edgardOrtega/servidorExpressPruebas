const { Pool } = require('pg') 

const pool = new Pool({    
    host: 'localhost',    
    user: 'postgres',    
    password: '12345',    
    database: 'plan_de_viajes',    
    allowExitOnIdle: true 
}) 

const getDate = async () => {    
    const result = await pool.query("SELECT NOW()")    
    console.log(result)   
} 
//getDate()

const agregarViaje = async (destino, presupuesto) => { 
    const consulta = "INSERT INTO viajes values (DEFAULT, $1, $2)"
    const values = [destino, presupuesto] 
    const result = await pool.query(consulta, values) 
    console.log( "Viaje agregado") 
}

//agregarViaje("Concepción", 150000)

const obtenerViajes = async () => {    
    const { rows } = await pool.query("SELECT * FROM viajes")    
    console.log(rows)    
    return rows 
} 
//obtenerViajes()


//=======================   PARTE 2 ============

const modificarPresupuesto = async (presupuesto, id) => {
    const consulta = "UPDATE viajes SET presupuesto = $1 WHERE id = $2"
    const values = [presupuesto, id]
    const result = await pool.query(consulta, values)
}

const eliminarViaje  = async (id) => {
    const consulta = "DELETE FROM viajes WHERE id = $1"
    const values = [id]
    const result = await pool.query(consulta, values)
}

module.exports = { agregarViaje, obtenerViajes, modificarPresupuesto, eliminarViaje }