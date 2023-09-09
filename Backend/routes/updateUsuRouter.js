const { Router } = require("express");

const { check } = require("express-validator");
const updateUsuController =require('../controllers/updateUsuController');
const {validainfo ,validarJWT}=require('../middlewares/validainicio');

const updateUsuRouter = Router();
updateUsuRouter.patch('/ModificarUsu/:id', updateUsuController.patch); 

module.exports = updateUsuRouter;