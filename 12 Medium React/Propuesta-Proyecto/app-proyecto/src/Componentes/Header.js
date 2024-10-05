import React from "react";
import logo from './signo.png';

function Header() { 
    return(
            <div style={{display: "flex"}}>

                {//Columna de la izquierda
                }

                <div style={{backgroundColor: "#282c34", width:"50%", height:"100vh",padding:"2em 3em", alignContent: "center"}}>
                <img src={logo} className="App-logo" alt="logo" style={{height:"25vh"}}  />
                    <h1 style={{color:"white"}}>BIENVENIDO AL ADIVINO</h1>
                    <h3 style={{color:"white"}}>En este juego, tu tarea es simple pero emocionante: ¡adivinar el número correcto!</h3>
                    <h4 style={{color:"white"}}>¿Cómo jugar?</h4>
                    <ul>
                        <li style={{color:"white"}}>Elige un número: Piensa en un número entre 1 y 10.</li>
                        <li style={{color:"white"}}>Ingresa tu número: Escribe tu número en el campo de entrada y presiona el botón "Enviar".</li>
                        <li style={{color:"white"}}>Espera la respuesta: El sistema te dirá si tu número es correcto, demasiado alto, o demasiado bajo.</li>
                        <li style={{color:"white"}}>Sigue intentándolo: Continúa adivinando hasta que aciertes el número correcto.</li>
                    </ul>
                </div>
                
                {//Columna de la derecha
                }
                
                <div style={{padding:"2em 3em", width:"50%", height:"100vh", alignContent: "center"}}>
                
                <h1>ADIVINA EL NUMERO</h1>
                <h2 id="ContenidoNumero"></h2>
                <p>Recuerde que el numero a elegir debe ser entre 0 y 10</p>
                <input type='Number' id='NumeroUsuario' min={"0"} max={"10"} style={{padding:"5px"}}></input>
                <br></br>
                <br></br>
                <button onClick={Funcionalidad} style={{padding:"20px 30px", backgroundColor:"#ffd15b", borderWidth:"0px"}}>Enviar</button>
                </div>
                      
            </div>
        );
};

function Funcionalidad(){
    let NumeroUsuario = document.getElementById("NumeroUsuario");
    let NumeroAleatorio = Math.floor(Math.random() * 11);
    let Respuesta = document.getElementById("ContenidoNumero")

    if(NumeroUsuario.value == NumeroAleatorio ){
        alert("Felicidades el numero aleatorio es " + NumeroAleatorio);
        Respuesta.textContent = "Felicidades Adivinaste" ;
    }else{
        alert("Fallaste el numero aleatorio es " + NumeroAleatorio);
        Respuesta.textContent = "Sigue intentando" ;
    }
}

export default Header;