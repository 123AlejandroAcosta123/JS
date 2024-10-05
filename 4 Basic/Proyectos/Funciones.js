let notas =[45,40,41,48,50,35];

function CreateListQualificaction(){
    let LugarLista = document.getElementById("ListadoCalificaciones");
    for(let lista of notas){
       let li = document.createElement("li");
        li.innerText = lista;
        LugarLista.appendChild(li);
    }
}

function promedio(){

    let TextoPromedio = document.getElementById("ResultadoBotones");
    let CantidadNotas = notas.length;
    let Promedio = 0;

    for(x = 0; x < CantidadNotas; x++){

        let ElementosArray = notas[x];
        let suma = Promedio + ElementosArray;
        console.log(ElementosArray);
        resultado = 0 + suma;
        Promedio = resultado;
    }
    TextoPromedio.textContent = Promedio / CantidadNotas; 
}

function notaAlta(x=0){

    let TextoPromedio = document.getElementById("ResultadoBotones");
    let ElementosArray = notas[x];
    let ElementoMayor = 0;
    
    while(ElementosArray ){
        if(ElementoMayor <= ElementosArray){
            ElementoMayor = ElementosArray
            ElementosArray = notas[x++];
            TextoPromedio.textContent = ElementoMayor;
        }else{
            ElementosArray = notas[x++];
            ElementoMayor=ElementoMayor;
        }

    }
}

function Aplazo(x=0){

    let TextoPromedio = document.getElementById("ResultadoBotones");
    let ElementosArray = notas[x];
    let calificacion = 0;

    do{
        if(ElementosArray < 40){
            TextoPromedio.textContent = "Tiene que recuperar tiene una nota baja de: " + ElementosArray;
            break;
        }else{
            ElementosArray = notas[x++]
            TextoPromedio.textContent = "No recupera";

        };
    }while( calificacion < 40);

}