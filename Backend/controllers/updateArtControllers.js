const Articulo = require("../models/SchemaArticulo");

exports.patch= async ( req , res) => {
    try {  
      const { _id, NombArticulo , TipoArticulo , StockArticulo , PrecioArticulo , EstArticulo }= req.body;
      const filter={ _id:req.params.id};
      const updateData={NombArticulo , TipoArticulo , StockArticulo , PrecioArticulo , EstArticulo};
      let updateArt = await Articulo.findByIdAndUpdate( filter, updateData, {new:true})
      res.status(200).json({ status: "success", data:updateArt,});
    } catch (error){
       res.status(404).send(error);
    }
} ;
 