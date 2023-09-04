const { Router } = require("express");
const { check } = require("express-validator");
const getDataApiController =require('../controllers/getDataApiController');

const getDataApiRouter = Router();
    getDataApiRouter.post('/CatalogOtrosart', getDataApiController.post); 

module.exports = getDataApiRouter;





