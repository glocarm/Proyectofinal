const { Router } = require("express");
const { check } = require("express-validator");
const deleteArtControllers =require('../controllers/deleteArtControllers');
// const {validainfo ,validarJWT}=require('../middlewares/validainicio');


const deleteArtRouter = Router();
deleteArtRouter.delete('/EliminarArt/:id',  deleteArtControllers.delete); 

module.exports = deleteArtRouter;