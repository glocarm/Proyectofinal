const axios=require('axios');
const DataApi = require("../models/Schemadatapi")

exports.get= async ( _, res) => {
    try { 
      const getAllArtApi=(await axios("http://localhost:5050/CatalogoDataApi")
      ).data.map((e)=>({
        id: e.id,
        title: e.title,
        price: e.price,
        name: e.category.name,
        Imagen: e.category.image,
    })
    );
    res.status(200).send(getAllArtApi);
  } catch (error){
    res.status(500).send(error);
  }
} ;
 
exports.getDB = async ( _, res) => {
try {
    const dbArtApi= await DataApi.find()
    res.status(200).send(dbArtApi);
  } catch (error){
    res.status(404).send(error);
  }
}

