const bcryptjs =require('bcryptjs');
const {generarJWT}=require('../middlewares/jwt');
const Usuario=require('../models/SchemaUsuario');

const login=async(req, res)=>{
    const { Email ,Password}=req.body;
    console.log(Email);
    console.log(Password);
    try { 
        const usuario=await Usuario.findOne({Email})
        if(!usuario){
            return res.status(401).json({
                msg: 'El correo no es correcto',
            })
        }

        if(!usuario.EstUsuario){
            return res.status(400).json({
                msg: 'Usuario Desactivado',
            })
        }

        const validapassword= bcryptjs.compareSync(Password, usuario.Password);
        if(!validapassword){
            return res.status(400).json({
                msg: 'Password Incorrecto'
            })
        }

        const token=await generarJWT(usuario.id);
        console.log(token);
        res.json({
            usuario, 
            token,
        });
    }catch (error) {
        console.log(error);
    }
};
module.exports=login;