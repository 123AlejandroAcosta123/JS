const express = require("express");
const cors = require("cors");
const app = express();
const mySQL = require("./connection");
const Seguridad = require('./Seguridad');

app.use(cors());
app.use(express.json());

app.post("/usuarios/login", (pedido, respuesta) => {    

    let UsuarioEncriptado =  Seguridad.encryptacion(pedido.body.email);
    console.log("Usuario " + UsuarioEncriptado);
    let ContraseñaHashing =  Seguridad.mihash(pedido.body.pass);
    console.log("Contraseña " + ContraseñaHashing);

    mySQL.connection.query('SELECT id FROM usuarios WHERE (administrador = 0 AND email = "' + UsuarioEncriptado + '" AND pass = "' + ContraseñaHashing + '") ' + 
                           'OR (administrador = 1 AND email = "' + pedido.body.email + '" AND pass = "' + pedido.body.pass + '")', function(error, resultados) {
        if (error){
            throw error
        };
        if(resultados.length === 0){ // Si el total de filas encontradas es 0 da error undefined
            respuesta.send(undefined);
        }
        else{
            respuesta.send(Seguridad.CrearToken(resultados[0]['id'], pedido.body.email));
        } 
            
    });
})

app.post("/usuarios/create", (pedido, respuesta) => {

    let UsuarioEncriptado =  Seguridad.encryptacion(pedido.body.email);
    let ContraseñaHashing =  Seguridad.mihash(pedido.body.pass);

    mySQL.connection.query('INSERT INTO usuarios (email, pass, administrador) VALUES ("' + UsuarioEncriptado + '", "' + ContraseñaHashing + '", 0)', function(error, resultados) {
        if (error) throw error;
        mySQL.connection.query('INSERT INTO permisosxusuario VALUES (' + resultados['insertId'] + ', 2)', function(error, resultados) {
            if (error)throw error;
            respuesta.send(true);
        });
    });
})

app.get("/ofertas", (pedido, respuesta) => {    
    mySQL.connection.query('SELECT * FROM ofertas', function(error, resultados) {
        if (error) throw error;
        respuesta.send(resultados);
    });
})

app.post("/validate", Seguridad.ValidarToken,(pedido,respuesta) => {
    mySQL.connection.query('SELECT P.pagina from permisos p JOIN permisosxusuario u ON u.permiso_id = p.id ' + 
        'WHERE u.usuario_id = "' + pedido.user.usuario_id + '" AND p.nombre = "' + pedido.body.permiso + '"', function(error,resultados){
            if(error) throw error;
            if(resultados.length === 0){
                respuesta.send(undefined);
            }else{
                respuesta.send(resultados[0]['pagina']);
            }
        }
    );
})

app.listen(3000, () => {
    console.log("El servidor esta en línea")
})



