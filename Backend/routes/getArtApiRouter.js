const { Router } = require("express");
const { check } = require("express-validator");
const getArtDataApiController =require('../controllers/getArtDataApiController');

const getArtApiRouter = Router();
getArtApiRouter.get('/CatalogoDataApi', getArtDataApiController.getDB); 

module.exports = getArtApiRouter;