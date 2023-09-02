const Articulo=require('../models/SchemaArticulo');

exports.delete= async( req , res) => {
    try{
        const {id}=req.params ; 
        const deleteart=await Articulo.findByIdAndDelete({_id:id});
        res.status(200).send(deleteart);
    }catch(error) {
        res.status(404).send(error)
    }
}