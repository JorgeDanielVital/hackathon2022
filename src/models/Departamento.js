const database = require('../models/db');

const db = database.pool;

export const getDepartamento = async() =>{   
    const table = await db.query(`
    Select NOMBRE 
    from DEPARTAMENTO 
    where NOMBRE != 'Lima'`).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;  
}
