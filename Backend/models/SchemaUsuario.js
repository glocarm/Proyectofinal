const  { Schema , model}= require('mongoose');
const SchemaUsuario=new Schema ({
    Nombre: { //Nombre del Usuario
        type: String,
        required: [ true, 'Nombre del Usuario es obligatorio']
    },
    Apellido: { //Apellido del Usuario
        type: String,
        required: [ true, 'Apellido del Usuario es obligatorio']
    },
    TipoUsuario : { //Tipo de Usuario ADMIN o CLIENTE
        type: String,
        enum:[ 'ADMIN-ROLE', 'USER-ROLE'],
        required: [ true, 'Tipo de Usuario es obligatorio']
    },
    Email: { //Email del Usuario
        type: String,
        required: [ true, 'Email del Usuario es obligatorio']
    },
    Password: { //Password del Usuario
        type: String,
        required: [ true, 'Password del Usuario es obligatorio']
    },
    EstUsuario: { //Estado del Usuario 
        type: String,
        default: "ACTIVO"
    },
});

const Usuario = model('Usuario', SchemaUsuario );
module.exports= Usuario;