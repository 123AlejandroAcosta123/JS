//variables
let nombreHtml = document.getElementById("Titulo");
let imagenHTML = document.getElementById("imagen");
let apiDolarEuro ="https://open.er-api.com/v6/latest/USD"; 
let apiDolarBitcone ="https://api.coindesk.com/v1/bpi/currentprice.json"; 
let apiDolarPesoArgentino = "https://open.er-api.com/v6/latest/ARS";
let monedaDolarEuro =  document.getElementById("moneda1");
let monedaDolarBitcone =  document.getElementById("moneda2")
let monedaDolarPesoArgentino =  document.getElementById("moneda3")

// Funcion carga
function funcionCarga(){
cargaDatos();
ValoresHTML();
}


//funciones principales
async function cargaDatos(){
 let respuestaDolarEuro = await fetch(apiDolarEuro)
 let convertirAjson = await respuestaDolarEuro.json();

 let respuestaDolarBitcone = await fetch(apiDolarBitcone)
 let convertirAjson1 = await respuestaDolarBitcone.json();

 let respuestaDolarPesoArgentino = await fetch(apiDolarPesoArgentino)
 let convertirAjson2 = await respuestaDolarPesoArgentino.json();

console.log("Dolar a euro")
 console.log(convertirAjson)

 console.log("Dolar a bitcone")
 console.log(convertirAjson1)

 console.log("Dolar a peso")
 console.log(convertirAjson2)

 mostrarMonedas(convertirAjson,convertirAjson1,convertirAjson2)
}
function ValoresHTML(){
    nombreHtml.textContent = "Conoce el precio de la moneda";
    imagenHTML.setAttribute("src", "money-management.png");
    imagenHTML.setAttribute("width", "70px");
    document.getElementById("Imgesperar").setAttribute("src", "loading.gif");
    document.getElementById("Imgesperar").style.visibility="visible";
}
function mostrarMonedas(moneda1, moneda2, moneda3){

// Moneda Dolar a euro    
let p = document.createElement("p");
p.innerText = moneda1.rates.EUR;
monedaDolarEuro.appendChild(p);

// Moneda Dolar a bitcone  
let p1 = document.createElement("p");
p1.innerText = moneda2.bpi.USD.rate
monedaDolarBitcone.appendChild(p1);

// Moneda Dolar a pesoArgentino
let p2 = document.createElement("p");
p2.innerText = moneda3.rates.USD;
monedaDolarPesoArgentino.appendChild(p2);

document.getElementById("Imgesperar").style.visibility="hidden";
}