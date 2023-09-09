const  { Schema , model}= require('mongoose');
const SchemaArticulo=new Schema ({
    CodArticulo: { //Nombre del producto
        type: String,
        required: [ true, 'Código del articulo es obligatorio']
    },
    NombArticulo: { //Nombre del producto
        type: String,
        required: [ true, 'Nombre del articulo es obligatorio']
    },
    TipoArticulo: { //Presentación del producto
        type: String,
        enum:['ANILLO','COLLAR','ARETE'],
        required:[ true, 'El Tipo del articulo es obligatorio']
    },
    StockArticulo: { //Stock disponible del articulo
        type: Number,
        required:[ true, 'Stock del articulo no puede estar vacío']
    },
    PrecioArticulo: { //Precio del articulo
        type: Number,
        required:[ true, 'El precio del articulo no puede estar vacío']
    },
    ImagenArticulo: { //Imagenes del articulo
        type: String
    },
    EstArticulo: { //Estado del articulo en el Inventario, ACTIVO o NO ACTIVO se comercializa false no se comercializa
        type: String,
        default: "ACTIVO"
    },
});

const Articulo = model('Articulo', SchemaArticulo );

module.exports= Articulo ;