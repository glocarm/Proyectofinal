const Usuario=require('../models/SchemaUsuario');

exports.delete= async( req , res) => {
    try{
        const {id}=req.params ; 
        const deleteusu=await Usuario.findByIdAndDelete({_id:id});
        res.status(200).send(deleteusu);
    }catch(error) {
        res.status(404).send(error)
    }
}