function EnviarNumero(tabla){

tabla = document.getElementById("TablasMultiplicacion").value;
let lista = document.getElementById("ListaTablas");

    for(x = 0 ; x < 11; x++){

        let Multiplicion = +x * +tabla;
        let ResultadoMultiplicacionVisual = x + " x " + tabla + " = " + Multiplicion ;
        let textoResultado = document.createElement("li");
        textoResultado.innerText= ResultadoMultiplicacionVisual;
        lista.appendChild(textoResultado);
    }
}