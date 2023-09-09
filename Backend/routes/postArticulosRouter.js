const { Router } = require("express");
const { check } = require("express-validator");
const postArtControllers =require('../controllers/postArtControllers');

const postArticulosRouter = Router();
postArticulosRouter.post('/RegistrarArt', 
/*[ check("NombArticulo", "Nombre es obligatorio").not().isEmpty(), 
   check("NombArticulo").custom(ArticuloporNombre),
  check("CodArticulo").custom(ArticuloporCod), */
   postArtControllers.post); 
 
module.exports = postArticulosRouter;

//****  Validaciones me dan Error en el front, pero con ThunderClient muestra las validaciones correctamente