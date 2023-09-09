const Usuario = require("../models/SchemaUsuario");
const bcryptjs = require('bcryptjs');

exports.post= async ( req , res) => {
    try {  
      const { Nombre, Apellido , TipoUsuario , Email , Password , EstUsuario }= req.body;
      let NewUsuario = new Usuario({ Nombre, Apellido , TipoUsuario , Email , Password , EstUsuario:"ACTIVO" });
      const salt = bcryptjs.genSaltSync();
      NewUsuario.Password=bcryptjs.hashSync(Password,salt);
      await NewUsuario.save();
      res.status(201).json({ status: "success", data: NewUsuario});
    } catch (error){
       res.status(404).send(error);
    }
} ;