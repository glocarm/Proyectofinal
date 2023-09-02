const { Router } = require("express");
const { check } = require("express-validator");
const deleteUsuController =require('../controllers/deleteUsuController');
const {validainfo ,validarJWT}=require('../middlewares/validainicio');

const deleteUsuRouter = Router();
deleteUsuRouter.delete('/EliminarUsu/:id', deleteUsuController.delete); 

module.exports = deleteUsuRouter;