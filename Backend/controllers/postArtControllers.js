const Articulo = require("../models/SchemaArticulo");

exports.post= async ( req , res) => {
    try {  
      const { CodArticulo, NombArticulo , TipoArticulo , StockArticulo , PrecioArticulo , ImagenArticulo , EstArticulo }= req.body;
      
      let NewArticulo = await Articulo.create({
        CodArticulo, 
        NombArticulo , 
        TipoArticulo , 
        StockArticulo , 
        PrecioArticulo , 
        ImagenArticulo , 
        EstArticulo :"ACTIVO"
      });
      res.status(201).json({ status: "success", data:NewArticulo});
    } catch (error){
       res.status(404).send(error);
    }
} ;
 


