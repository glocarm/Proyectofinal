const { Router } = require("express");
const { check } = require("express-validator");
const updateArtControllers =require('../controllers/updateArtControllers');
// const {validainfo ,validarJWT}=require('../middlewares/validainicio');

const updateArtRouter = Router();

updateArtRouter.patch('/ModificarArt/:id',   updateArtControllers.patch); 

module.exports = updateArtRouter;