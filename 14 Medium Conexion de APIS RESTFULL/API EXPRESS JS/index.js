//ACA DEJAMOS LA CONFIGURACIONDE LA APLICACION
 // importamos el FRAMEWOK EXPRESS

const express = require("express");
const app = express();

 //Obtener el modulo de conexion.js
 const MongoDB = require("./Conexion");

//Configurar nuestra API para que trabaje bajo un formato en especifico en este caso JSON
app.use(express.json());

//Defini metodo GET
app.get("/Clientes" , (pedido, respuesta) => {
    //obtener Listado clientes
    MongoDB.ConexionMongoDB()
    .then((conexion) => {const controlador = conexion.db().colection("Clientes");
        controlador.find().toArray()
        .then ((filas) => respuesta.send(filas))
        .catch((error) => respuesta.send(error));
    })
 })

 //Definimos post

 app.post("/Clientes/create" , (pedido,respuesta) => {
    MongoDB.ConexionMongoDB()
    .then((conexion) => {const controlador = conexion.db().colection("Clientes");
         controlador.insertOne(pedido.body)
         .then(respuesta.send("Registro creado"))
         .catch((error) => console.log(error));
    })
 })

 //Iniciar servidor en el puerto 3000 que pide la api

 app.listen(3000, () =>{
    console.log("Conexion exitosa");
 })