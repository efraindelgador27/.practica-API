'use strict '
// Dependecias:
const mongoose = require('mongoose');
const app=require('./app')
const port= process.env.port || 5000;

mongoose.connect('mongodb://localhost:27017/shop',(res,err)=>{
    if(err) console.log(`error de coneccion con la base de datos: ${err}`)
 
    console.log('coneccion exitosas ...')

    app.listen(port,()=>{console.log("Acuerdate de espesificar el puerto por favor")}
    );
})


    