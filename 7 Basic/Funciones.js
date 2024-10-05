function automovil(marca,modelo,color,anio,titular){
this.marca=marca;
this.modelo=modelo;
this.color=color;
this.anio=anio;
this.titular=titular;
};

let automovil1 = new automovil("BMW","R5","Blanco",2015,"Jorge Manrique");
let automovil2 = new automovil("CHEVROLET","ONIX TURBO","GRIS",2018,"Manuel Acosta");
let automovil3 = new automovil("AUDI","Q3","Negro",2022,"Sebatian Garzon");

let Array = [automovil1, automovil2, automovil3];

automovil.prototype.venderAutomovil = function(Nuevotitular){
    this.titular = Nuevotitular;
};

automovil.prototype.verAuto = function(){
    let texto = "Marca: " + this.marca + "/n" + 
        "Modelo: " + this.modelo + "/n" +
        "Año: " + this.anio + "/n" + 
        "Titula: " +this.titular + "/n";
        return texto;
};

automovil.prototype.enceder = function(Nuevotitular){
    alert("Vehiculo en marcha");
};

function Mostrarinformacion(){
    let UL = document.getElementById("ListaUL");
    for(let vehiculo of Array){
    let li = document.createElement("li");
    li.innerText = vehiculo.verAuto();
    UL.appendChild(li);
    }
}