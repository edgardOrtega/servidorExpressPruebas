const { Pool } = require('pg') 

const pool = new Pool({    
    host: 'localhost',    
    user: 'postgres',    
    password: '12345',    
    database: 'plan_de_viajes',    
    allowExitOnIdle: true 
}) 

const agregarEquipamiento = async (nombre) => { 
    const consulta = "INSERT INTO equipamiento values (DEFAULT, $1)"
    const values = [nombre] 
    const result = await pool.query(consulta, values) 
    console.log( "Equipamiento agregado") 
}

//agregarEquipamiento("Selfie Stick")

const obtenerEquipamiento = async () => {    
    const { rows } = await pool.query("SELECT * FROM equipamiento")    
    console.log(rows)    
    return rows 
} 



// Parte 2
const modificarNombre = async (nombre, id) => {

    const consulta = "UPDATE equipamiento SET nombre = $1 WHERE id = $2"
    const values = [nombre, id]
    const result = await pool.query(consulta, values)
}

const eliminarEquipamiento = async (id) => {

    const consulta = "DELETE FROM equipamiento WHERE id = $1"
    const values = [id]
    const result = await pool.query(consulta, values)
}

module.exports = {agregarEquipamiento,obtenerEquipamiento, modificarNombre, eliminarEquipamiento}

