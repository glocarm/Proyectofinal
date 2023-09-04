const axios = require('axios');
const DataApi = require('../models/Schemadatapi');

exports.post= async ( req , res) => {
  try {
    const response = await axios.get( 'https://api.escuelajs.co/api/v1/products');
    const data = response.data;
    // console.log(data);
    await DataApi.create(data);
    res.status(200).json({ message: 'Datos de la Api guardados en BD' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al guardar los Datos de la Api en BD' });
  }
};

