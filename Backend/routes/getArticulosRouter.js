const { Router } = require("express");
const { check } = require("express-validator");
const getArtControllers =require('../controllers/getArtControllers');

const getArticulosRouter = Router();
    getArticulosRouter.get('/CatalogoArt', getArtControllers.getDB); 

module.exports = getArticulosRouter;
