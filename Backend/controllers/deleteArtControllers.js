const Articulo=require('../models/SchemaArticulo');

exports.patch= async( req , res) => {
    try{
        const {id}=req.params ; 
        const deleteart=await Articulo.findByIdAndUpdate({_id:id},{ EstArticulo: "NO ACTIVO"});
        res.status(200).send(deleteart);
    }catch(error) {
        res.status(404).send(error)
    }
}