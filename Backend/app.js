require('dotenv').config();
const express=require('express');
const cors=require('cors');
const mongoose = require('mongoose');

const iniciarSesionRouter=require('./routes/iniciarSesionRouter');
const getArticulosRouter=require('./routes/getArticulosRouter');
const getArtUsuRouter=require('./routes/getArtUsuRouter');
const postArticulosRouter=require('./routes/postArticulosRouter');
const updateArtRouter=require('./routes/updateArtRouter');
const updateUsuRouter=require('./routes/updateUsuRouter');
const postUsuarioRouter=require('./routes/postUsuarioRouter');
const getUsuRouter=require('./routes/getUsuRouter');
const deleteArtRouter=require('./routes/deleteArtRouter');
const deleteUsuRouter=require('./routes/deleteUsuRouter');
const getDataApiRouter=require('./routes/getDataApiRouter');
const getArtApiRouter=require('./routes/getArtApiRouter'); 


const server=express();
server.use(express.json())

const MONGOD_URI = process.env.CONNECT_STRING
mongoose.connect(MONGOD_URI, {
    useUnifiedTopology: true,
    useNewUrlParser : true,})
.then(db=>console.log('Base de datos conectada en Port 5050'))
.catch(error=>console.log(error));


server.use(cors({ origin: 'http://localhost:3000'}));
server.use( (req , res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type Accept');
    res.header('Access-Control-Allow-Methods', 'GET , POST , OPTIONS , PUT , PATCH , DELETE');
    next();
});

server.use('/', iniciarSesionRouter);
server.use('/', getArticulosRouter);
server.use('/', getArtUsuRouter);
server.use('/', getUsuRouter);
server.use('/', postArticulosRouter);
server.use('/', postUsuarioRouter);
server.use('/', updateArtRouter);
server.use('/', updateUsuRouter);
server.use('/', deleteArtRouter);
server.use('/', deleteUsuRouter);
server.use('/', getDataApiRouter);
server.use('/', getArtApiRouter);


server.listen(5050, ()=>{
    console.log('Servidor corriendo correctamente en localhost 5050')
})