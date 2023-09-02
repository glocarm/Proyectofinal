const mongoose = require('mongoose');
const dbconection = async()=> {
    try{
        await mongoose.connect(process.env.CONNECT_STRING);
        console.log("Base de Datos conectada en el Puerto :",process.env.PORT);
    }catch(error){
        console.log(error);
        throw new Error ('Error al iniciar la BD');
    }
};

module.exports= dbconection;