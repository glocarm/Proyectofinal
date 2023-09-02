const { Router } = require("express");
const { check } = require("express-validator");
const postArtControllers =require('../controllers/postArtControllers');

const postArticulosRouter = Router();
postArticulosRouter.post('/RegistrarArt',  postArtControllers.post); 

module.exports = postArticulosRouter;

/*[ check("NombArticulo", "Nombre es obligatorio").not().isEmpty(), 
   check("NombArticulo").custom(ArticuloporNombre),
  check("CodArticulo").custom(ArticuloporCod), */