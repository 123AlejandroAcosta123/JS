const JWT = require('jsonwebtoken');
const claveSecreta = "Ejemplo_Para_Clave_Secreta";

//HASHING
const bcrypt = require('bcrypt');
const ciclos = 10;
const salt = bcrypt.genSaltSync(ciclos);

//ENCRYPTACION
const crypto = require('crypto');
const algoritmo = 'aes-128-gcm'; //Aca colocamos el tipo de algoritmo que se usa para encryptar este es el mas comun
const clave = 'pass 16 caracter'; //Colocamos la cantidad maxima de caracteres a usar 128 Byte en este caso
const vi = crypto.randomBytes(16);//Cantidad de caracteres a encriptar


function CrearToken(idUsuario, ParametroUsuario){
    //Almacena la informacion en un objeto
    const informacion = {
        usuario_id: idUsuario,
        usuario: ParametroUsuario
    };

    const token = JWT.sign(informacion,claveSecreta, {expiresIn : '1h'}) // agregamos en JWT la informacion, clave secreta y tiempo de expiracion de sesion
    return token;
}

function ValidarToken(req, res, next){

    const token = req.headers.authorization;

    try{
        const decodificado = JWT.verify(token.split(' ')[1], claveSecreta);
        req.user = decodificado;
        next();
    }catch(error){
        return res.status(401).send('Token de autenticacion invalido');
    }
}

function mihash(clave){
    //Aca vamos a aclarar la cantidad de ciclos de seguridad que va a tener el codigo mientras mas ciclo mas seguridad
    const claveHashing = bcrypt.hashSync(clave, salt);
    
    return claveHashing;

}

function encryptacion(dato){

    const cifrado = crypto.createCipheriv(algoritmo, clave, vi); //esta funcion se usa para tener los parametros listos de encriptacion

    let encriptado = cifrado.update(dato, 'utf8', 'hex'); //Hacemos que el dato que se reciba se encripte con las normas que establecimos

    encriptado += cifrado.final('hex');

    return encriptado;
}

module.exports= {CrearToken,ValidarToken,mihash,encryptacion};