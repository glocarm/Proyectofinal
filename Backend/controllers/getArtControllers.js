const axios=require('axios');
const Articulo = require("../models/SchemaArticulo");

exports.get= async ( _, res) => {
    try { 
      const getAllArticulos=(await axios("http://localhost:5050/CatalogoArt")
      ).data.map((e)=>({
        id: e.id,
        CodArticulo: e.CodArticulo,
        NombArticulo: e.NombArticulo,
        TipoArticulo: e.TipoArticulo,
        StockArticulo: e.StockArticulo,
        PrecioArticulo: e.PrecioArticulo,
        ImagenArticulo: e.ImagenArticulo,
        EstArticulo: e.EstArticulo
    })
    );
    res.status(200).send(getAllArticulos);
  } catch (error){
    res.status(500).send(error);
  }
} ;
 
exports.getDB = async ( _, res) => {
try {
    const dbArticulos= await Articulo.find()
    res.status(200).send(dbArticulos);
  } catch (error){
    res.status(404).send(error);
  }
}

