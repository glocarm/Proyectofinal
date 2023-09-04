const{ validationResult} = require("express-validator");
const Articulo = require("../models/SchemaArticulo");
const Usuario =require("../models/SchemaUsuario");
const jwt=require("jsonwebtoken");

const validainfo =( req , res, next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errores: error.array()});
    }
    next();
}

const UsuarioEmail= async (Email)=>{
    const usuario=await Usuario.findOne({ Email});
    if (usuario){
        throw new Error ("El correo electronico ya esta registrado");
    }
};


const EmailUsulogin= async (Email)=>{
    const usuario=await Usuario.findOne({ Email});
    if (!usuario){
        throw new Error ("El correo electronico no está registrado");
    }
};

const ExisteUsuarioporId= async (idusu)=>{
    const usuario=await Usuario.findById({idusu});
    if (!usuario){
        throw new Error ("El usuario no esta registrado");
    }
};
const ArticuloporNombre = async (NombArticulo)=> {
    const articulo = await Articulo.findOne({NombArticulo});
    if(articulo){
        throw new Error(" Ya existe Articulo con ese nombre");
    }
};
const ArticuloporCod = async (CodArticulo)=> {
    const codigo = await Articulo.findOne({CodArticulo});
    if(codigo){
        throw new Error (" Ya existe un Articulo con ese codigo");
    }
 };
 

const validarJWT= async(req, res, next)=>{
    const token=req.header('x-token');
    if(!token){
        return res.status(401).json({
            msg : "No hay token en la petición",
        });      
    }
    try {
        const idusu=jwt.verify(token,process.env.SECRETPRIVATEKEY);
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



module.exports = { validainfo , ArticuloporNombre, ArticuloporCod, EmailUsulogin, UsuarioEmail, ExisteUsuarioporId, validarJWT};