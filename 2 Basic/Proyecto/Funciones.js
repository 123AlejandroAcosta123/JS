let primerNumero;
let segundoNumero;
let resultado;

function traerDatos(){
    primerNumero = document.getElementById("NumeroUno").value;
    segundoNumero = document.getElementById("NumeroDos").value;
    resultado = document.getElementById("resultado");
}

function sumar(Numero1, Numero2){

    traerDatos();
    Numero1 = primerNumero;
    Numero2 = segundoNumero;
    resultado.textContent=(+Numero1 + +Numero2);
    return resultado;
}

function resta(Numero1, Numero2){

    traerDatos();
    Numero1 = primerNumero;
    Numero2 = segundoNumero;
    resultado.textContent=(+Numero1 - +Numero2);
    return resultado;
}

function division(Numero1, Numero2){

    traerDatos();
    Numero1 = primerNumero;
    Numero2 = segundoNumero;
    resultado.textContent=(+Numero1 / +Numero2);
    return resultado;
}
function multiplicar(Numero1, Numero2){
    traerDatos();
    Numero1 = primerNumero;
    Numero2 = segundoNumero;
    resultado.textContent=(+Numero1 * +Numero2);
    return resultado;
}
function raiz(Numero1){
    traerDatos();
    Numero1 = primerNumero;
    resultado.textContent=(Math.sqrt(Numero1));
    return resultado;
}
function potencia(Numero1, Numero2){
    traerDatos();
    Numero1 = primerNumero;
    Numero2 = segundoNumero;
    resultado.textContent=(Math.pow(Numero1,Numero2));
    return resultado;
}
function absoluto(){
    traerDatos();
    let operacion =(Math.abs(resultado.textContent));
    resultado.textContent= operacion ;
    return resultado;
}

function ramdom(){
    traerDatos();
    let operacion = Math.round(Math.random() * (9999 - 1000) + 1000);
    resultado.textContent= operacion ;
    return resultado;
}

function redondear(){
    traerDatos();
    let operacion = Math.round(resultado.textContent);
    resultado.textContent= operacion ;
    return resultado;
}

function redondearAbajo(){
    traerDatos();
    let operacion = Math.floor(resultado.textContent);
    resultado.textContent= operacion ;
    return resultado;
}

function redondearArriba(){
    traerDatos();
    let operacion = Math.ceil(resultado.textContent);
    resultado.textContent= operacion ;
    return resultado;
}