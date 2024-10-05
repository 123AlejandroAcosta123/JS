const jwt = require('jsonwebtoken');
const claveSecreta = 'vy9dd24';

function CreacionToken(idUsuario, Usuario){
    //Almacenar esa informacion en un objeto
    const informacion = {
        usuarioID: idUsuario,
        usuario: Usuario
    }

    const token = jwt.sign(informacion, claveSecreta, /*Duracion de expiracion del token*/ {expiresIn: '1h'});
    return token;
}

module.exports = {CreacionToken};