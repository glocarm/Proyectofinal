 const Usuario = require("../models/SchemaUsuario");
const bcryptjs = require("bcryptjs");

exports.patch = async (req, res) => {
  try {
    const { _id, Nombre, Apellido, TipoUsuario, Email, Password } = req.body;
    const filter = { _id: req.params.id };
    const updateData = { Nombre, Apellido, TipoUsuario , Email, Password };
   
    let updateUsu = await Usuario.findByIdAndUpdate(filter, updateData, {
      new: true,
    });
    res.status(200).json({ status: "success", data: updateUsu });
  } catch (error) {
    res.status(404).send(error);
  }
};



     