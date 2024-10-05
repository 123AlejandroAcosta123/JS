//Configuracion de expressJS
const express = require("express");
const app = express();

app.set("port", 3000);
app.listen(3000);

//Llamar al objeto mongodb Cliente del componente Mongodb

const {MongoClient} = require('mongodb');

//Funcion ASYn Para hacer peticiones al servidor

async function usar(){
    //Crear nueva instancia de Mongo client
    const client = new MongoClient("mongodb://127.0.0.1:27017/BaseDeDatosEjemplo");

    //Conectamos y hacemos nuestras peticiones
    try{
        const conexion = await client.connect();
        const controlador = conexion.db().collection("Clientes");

        let respuesta, filas, filtro;

        //Insertar un nuevo registro

        const nuevoCliente ={
            nombre:"Alejandro Acosta",
            genero:0,
            telefono:2484564354,
            Direccion: "cra 85 #78 a" 
        };

        respuesta = await controlador.insertOne(nuevoCliente);
        console.log("Registro creado" , respuesta);

        //realizar consultas
        filas = await controlador.find().toArray();
        console.log("Informacion encontrada", filas);

        //Modificar el resgitro
        const cambiarCliente = {
            $set: {genero: 1, telefono: 789456}  //Datos que se van a cambiar
        };
        filtro = {nombre: "Alejandro Acosta"}; //Como se va a buscar el resgitro a cambiar
        respuesta = await controlador.updateOne(filtro,cambiarCliente); //Sintaxis para cambiar (1 se pasa filtro, 2 se pasa estructura de cambio)
        console.log("Se ha modificado con exito", respuesta);

        //Realizar consulta
        filtro = {genero : 1}; //Se crea un filtro para solo consultar personas del genero 1
        filas = await controlador.find(filtro).toArray(); // se agrega sintaxis para traer informacion con un filtro
        console.log("Nueva fila", filas);

        //Eliminar registro
        filtro = {nombre:"Alejandro Acosta"}
        respuesta = await controlador.deleteOne(filtro);
        console.log("Usuario borrado", respuesta);

        //Realizar consulta
        filas = await controlador.find().toArray(); // se agrega sintaxis para traer informacion con un filtro
        console.log("Nueva fila", filas);

    }catch(error){
        console.log(error);
    }
}

usar()