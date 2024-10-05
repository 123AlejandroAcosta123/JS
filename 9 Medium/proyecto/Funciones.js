let DatosJson;
fetch('resumen.json')
.then(res => res.json())
.then((salida)=>{
    DatosJson = salida;
    let ul = document.getElementById("listaUl");
    let li = document.createElement("li");
    li.innerText = "Banco: " + DatosJson.banco + " Sucursal: "  + DatosJson.sucursal + " Titular: " 
    +  DatosJson.titular + " Numero de cuenta: " + DatosJson.nro_cuenta + " saldo: " + DatosJson.saldo[0].monto + " cbu: " + DatosJson.cbu; 
    ul.appendChild(li);
})
.catch(function(error){
    alert(error);
});