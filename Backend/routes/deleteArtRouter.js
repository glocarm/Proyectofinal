const { Router } = require("express");
const { check } = require("express-validator");
const deleteArtControllers =require('../controllers/deleteArtControllers');
// const {validainfo ,validarJWT}=require('../middlewares/validainicio');


const deleteArtRouter = Router();
deleteArtRouter.patch('/EliminarArt/:id',  deleteArtControllers.patch); 

module.exports = deleteArtRouter;