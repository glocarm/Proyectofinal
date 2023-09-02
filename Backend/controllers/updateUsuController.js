const Usuario = require("../models/SchemaUsuario");

exports.patch= async ( req , res) => {
    try {  
      const {  _id, Nombre , Apellido , Email , Password }= req.body;
      const filter={ _id:req.params.id};
      const updateData={ Nombre , Apellido ,  Email , Password  };
      let updateUsu = await Usuario.findByIdAndUpdate( filter, updateData, {new:true})
      res.status(200).json({ status: "success", data:updateUsu,});
    } catch (error){
       res.status(404).send(error);
    }
} ;
 
//http://localhost:5050/ModificarUsu/