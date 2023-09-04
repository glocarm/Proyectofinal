const { Router } = require("express");
const { check } = require("express-validator");
const postUsuController =require('../controllers/postUsuController');
const { validainfo , validarJWT} = require("../middlewares/validainicio");
const {UsuarioEmail , ExisteUsuarioporId} = require("../middlewares/validators");


const postUsuarioRouter = Router();
postUsuarioRouter.post('/RegistrarUsu', 
[check ('Email','Email es Obligatorio').not().isEmpty(),
 check('Email').custom(UsuarioEmail),
 check('id').custom(ExisteUsuarioporId),
 validainfo, 
], postUsuController.post); 

module.exports = postUsuarioRouter;