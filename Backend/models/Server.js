const express=require('express');
const cors=require('cors');
const dbconection=require('../database/database');
class Server {
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath="/api";
        this.authPath="/api/auth";
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    async conectarDB(){
        await dbconection();
    }
    middlewares(){
        this.app.use(cors({ origin: 'http://localhost:3000'}));
        this.app.use( (req , res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('Access-Control-Allow-Headers', 
            'Origin , X-Requested-With, Content-Type Accept');
            res.header('Access-Control-Allow-Methods', 
            'GET , POST , OPTIONS , PUT , PATCH , DELETE');
            next();
        } );
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath,require("../routes/getArticulosAll"));
        this.app.use(this.authPath,require("../routes/iniciarSesionRouter"));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el Puerto',this.port);
        });
    }
}

module.exports = Server;