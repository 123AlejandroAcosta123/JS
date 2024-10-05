let selector = document.getElementById("seleccionCategoria");
let SelccionLetras = document.getElementById("IngresoLetras");
let lista = document.getElementById("ListaUl")

//EVENTOS CREADOS
selector.addEventListener('change', informacionJson);
selector.addEventListener('cambioDeCategoria', mensajeEmergente);
SelccionLetras.addEventListener('keydown', SoloLetras);
div.addEventListener("mouseover", parrafoVisible);
div.addEventListener("mouseout", parrafoNOvisible);


//FUNCIONES
function informacionJson(){
    let categoriaEscogida = selector.value;
    let evento = new CustomEvent('cambioDeCategoria');
    selector.dispatchEvent(evento);
}
function mensajeEmergente(){
alert("Se modifico el archivo base a " + selector.value);
}
function SoloLetras(event){
    if(event.keyCode < 65 || event.keyCode > 90){

        if(event.keyCode !== 8 && event.keyCode !== 32){
            event.preventDefault();
        };

    };
};
function realizarBusqueda(){
lista.innerHTML="";

fetch(selector.value)
.then(res => res.json())
.then((salida)=>{
    DataJson=salida;
    let x = 0;
    for(let array of selector.value){
        if( x < 5){
        let Nombremovies = DataJson.data[x].nombre;
        let Sipnopsis = DataJson.data[x].sinopsis;
        if(SelccionLetras.value.startsWith(Nombremovies)){          
            let li = document.createElement("li");
            let p = document.createElement("p");
            let texto = Nombremovies  + Sipnopsis; 
            p.innerText = texto;
            li.appendChild(p);
            lista.appendChild(li);
            x++
        }else{
            x++
        }
    }else{
        alert("Busqueda completada");
        break;
    }
        
    }
})
.catch(function(error){
    alert(error);
});

};
function parrafoVisible(){
    div.style.display='block';
}
function parrafoNOvisible(){
    div.style.display='none';
}

