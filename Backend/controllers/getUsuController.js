const axios=require('axios');
const Usuario = require("../models/SchemaUsuario");

exports.get= async ( _, res) => {
    try {  //"http://localhost:5050/ListadoUsu"
      const getAllUsuarios=(await axios("http://localhost:5050/ListadoUsu")
      ).data.map((e)=>({
        id: e.id,
        Nombre: e.Nombre,
        Apellido: e.Apellido,
        TipoUsuario: e.TipoUsuario,
        Email: e.Email,
        Password: e.Password,
        EstUsuario: e.EstUsuario
    })
    );
    res.status(200).send(getAllUsuarios);
  } catch (error){
    res.status(500).send(error);
  }
} ;
 
exports.getDB = async ( _, res) => {
try {
    const dbUsuario= await Usuario.find({EstUsuario: "ACTIVO"})
    res.status(200).send(dbUsuario);
  } catch (error){
    res.status(404).send(error);
  }
}

