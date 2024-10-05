//ACA DEJAMOS LA CONFIGURACIONDE LA APLICACION
 // importamos el FRAMEWOK EXPRESS

 const express = require("express");
 const app = express();
 
  //Obtener el modulo de conexion.js
  const MongoDB = require("./Conexion");
 
 //Configurar nuestra API para que trabaje bajo un formato en especifico en este caso JSON
 app.use(express.json());
 
 //Defini metodo GET
 app.get("/estudiante/:_id", (pedido, respuesta) => {
     //obtener Listado clientes
     const legajoEstudiante = pedido.params._id;
     MongoDB.ConexionMongoDB()
     .then((conexion) => {
         const controlador = conexion.db().collection("estudiante");
         controlador.find( {_id:legajoEstudiante}).toArray()
         .then ((filas) => respuesta.json(filas))
         .catch((error) => respuesta.send(error));
     })
     .catch((error) => respuesta.send(error));
  });


//Definimos FUNCIONES POST MONGODB

app.post("/estudiante/create",(pedido,respuesta) => {
   MongoDB.ConexionMongoDB()
   .then((conexion) => {const controlador = conexion.db().collection("estudiante");
        controlador.insertOne(pedido.body)
        .then(respuesta.send("Registro creado de Estudiantes"))
        .catch((error) => console.log(error));
   })
});


 app.post("/Notas/create",(pedido,respuesta) => {
    MongoDB.ConexionMongoDB()
    .then((conexion) => {const controlador = conexion.db().collection("Notas");
         controlador.insertOne(pedido.body)
         .then(respuesta.send("Registro creado de notas"))
         .catch((error) => console.log(error));
    })
 });

//Definimos funciones de EDICION MONGODB

app.put("/Notas/:_id/update",(pedido,respuesta) => {
    
    const filtro = pedido.body
    const cambiarCliente = {
      $set: {Nota: "4.8"}  //Datos que se van a cambiar
  };
    MongoDB.ConexionMongoDB()
    .then((conexion) => {
         const controlador = conexion.db().collection("Notas");
         controlador.updateOne(filtro , cambiarCliente)
         .then(respuesta.send("Registro Creado con exito"))
         .catch((error) => console.log(error));
    })
 });

//Definimos funion de borrar MONGODB

app.delete("/Notas/:_id/delete", (pedido, respuesta) => {
   const filtro = pedido.body
   MongoDB.ConexionMongoDB()
   .then((conexion) => {
        const controlador = conexion.db().collection("Notas");
        controlador.deleteOne(filtro)
        .then(respuesta.send("Registro Eliminado con exito"))
        .catch((error) => console.log(error));
   })
});

//Traer informacion de notas con un flitro para aprobados (3.5)

app.get("/Notas/:Codigo_curso/aprobados", (pedido, respuesta) => {
   //obtener Listado clientes
   notaMinima = "3.5";
   const filtro = {Nota: + notaMinima}
   MongoDB.ConexionMongoDB()
   .then((conexion) => {
       const controlador = conexion.db().collection("Notas");
       controlador.find(filtro).toArray()
       .then ((filas) => respuesta.json(filas))
       .catch((error) => respuesta.send(error));
   })
   .catch((error) => respuesta.send(error));
});
  //Iniciar servidor en el puerto 3000 que pide la api

 app.listen(3000, () =>{
    console.log("Conexion exitosa");
 });