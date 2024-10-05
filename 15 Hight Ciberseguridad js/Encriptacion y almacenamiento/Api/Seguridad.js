const bcrypt = require('bcrypt');
const crypto = require('crypto');

function mihash(clave){
    //Aca vamos a aclarar la cantidad de ciclos de seguridad que va a tener el codigo mientras mas ciclo mas seguridad
    const ciclos = 10;
    const salt = bcrypt.genSaltSync(ciclos);

    const claveHashing = bcrypt.hashSync(clave, salt)
    
    return claveHashing;

}

function encryptacion(dato){
    const algoritmo = 'aes-128-gcm'; //Aca colocamos el tipo de algoritmo que se usa para encryptar este es el mas comun
    const clave = 'pass 16 caracter'; //Colocamos la cantidad maxima de caracteres a usar 128 Byte en este caso
    const vi = crypto.randomBytes(16);//Cantidad de caracteres a encriptar

    const cifrado = crypto.createCipheriv(algoritmo, clave, vi); //esta funcion se usa para tener los parametros listos de encriptacion

    let encriptado = cifrado.update(dato, 'utf8', 'hex'); //Hacemos que el dato que se reciba se encripte con las normas que establecimos

    encriptado += cifrado.final('hex');

    return encriptado;
}

module.exports = {mihash, encryptacion};