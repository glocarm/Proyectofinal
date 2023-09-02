const jwt=require('jsonwebtoken');

const generarJWT=(idusu='')=>{
    return new Promise( (res, rej)=>{
        const payload={idusu}; 
        jwt.sign(payload , process.env.SECRETPRIVATEKEY , {expiresIn:'6h'} ,  (error, token)=>{
            if(error){
                console.log(error);
                rej('No se pudo generar el token');
            } else {
                // res.send({ token });
                 res(token);
            }
        });
});
};
module.exports={generarJWT};