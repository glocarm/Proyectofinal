const{ validationResult} = require("express-validator");
const Usuario =require("../models/SchemaUsuario");
const jwt=require("jsonwebtoken");

const validainfo =( req , res, next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errores: error.array()});
    }
    next();
}

const validarJWT= async(req, res, next)=>{
    const token=req.header('x-token');
    if(!token){
        return res.status(401).json({
            msg : "No hay token en la petición",
        });      
    }
    try {
        const {idusu}=jwt.verify(token,process.env.SECRETPRIVATEKEY)
        const usuario=await Usuario.findById(idusu);
        if(!usuario){
            return res.status(401).json({
                msg : 'Token No Válido - Usuario Inhabilitado'
            })  
        }
        if(!usuario.EstUsuario){
            return res.status(401).json({
                msg : "Token No Válido - Usuario Inhabilitado"
            })
        }
        req.usuario=usuario;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg : "Token No Válido "
        })  
    }
};

module.exports = { validainfo , validarJWT};