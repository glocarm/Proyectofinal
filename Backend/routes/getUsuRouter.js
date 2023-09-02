const { Router } = require("express");
const { check } = require("express-validator");
const getUsuController =require('../controllers/getUsuController');


const getUsuRouter = Router();
getUsuRouter.get('/ListadoUsu',  getUsuController.getDB); 

module.exports = getUsuRouter;
