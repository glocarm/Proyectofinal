const { Router } = require("express");
const { check } = require("express-validator");
const getArtUsuControllers =require('../controllers/getArtUsuControllers');
const {validarJWT} =require('../middlewares/validainicio');

const getArtUsuRouter = Router();
getArtUsuRouter.get('/CatalogoArtUsu',  getArtUsuControllers.getDB); 

module.exports = getArtUsuRouter;