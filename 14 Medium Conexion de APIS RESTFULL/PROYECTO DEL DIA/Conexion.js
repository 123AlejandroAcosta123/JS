//Configurar la conexion de bd de mongo db

const {MongoClient} =require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017/ProyectoD16");

//Desarrrollamos una funcion para cpnectarnos a la base de datos y retornar el objeto que contine la conexion

const ConexionMongoDB = () => {
    return client.connect()
    .then((dbClient) => {return dbClient}) //Me devuelve todo al momento de que tengamos la conexio
    .catch((error) =>{return error}) // SI no se hace la conexion me devuelve el error
}

//Exportar para otra hoja

module.exports = {ConexionMongoDB};

