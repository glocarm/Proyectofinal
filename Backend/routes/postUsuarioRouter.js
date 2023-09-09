const { Router } = require("express");
const { check } = require("express-validator");
const postUsuController =require('../controllers/postUsuController');
const { validainfo , validarJWT} = require("../middlewares/validainicio");


const postUsuarioRouter = Router();
postUsuarioRouter.post('/RegistrarUsu', 
[check ('Email','Email es Obligatorio').not().isEmpty(),
//  check('Email').custom(UsuarioEmail),
], postUsuController.post); 

module.exports = postUsuarioRouter;

//****  Validaciones me dan Error en el front, pero con ThunderClient muestra las validaciones correctamente