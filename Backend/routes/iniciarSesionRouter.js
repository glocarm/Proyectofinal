const { Router } = require("express");
const { check } = require("express-validator");
const login = require("../controllers/auth");
const {validainfo }=require("../middlewares/validainicio");


const iniciarSesionRouter = Router();
iniciarSesionRouter.post("/login",  [
    check( 'Email','El correo es obligatorio').isEmail(),
    check('Password','La Contraseña es obligatoria').not().isEmpty(),
    validainfo  ],  login) 

module.exports = iniciarSesionRouter;  