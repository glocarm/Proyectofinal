const axios = require("axios");
const Usuario = require("../models/SchemaUsuario");

exports.get = async (req, res) => {
  try {
    const body = req.body;
    // Verificar si el usuario existe en la base de datos
    const user = await Usuario.findOne({ Email: body.email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Nombre de usuario o contraseña incorrectos" });
    }
    // Verificar si la contraseña es correcta
    const pass = await bcrypt.compare(body.password, user.Password);
    if (!pass) {
      return res
        .status(401)
        .json({ message: "Nombre de usuario o contraseña incorrectos" });
    }
    res.status(200).json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión", error });
  }
};
