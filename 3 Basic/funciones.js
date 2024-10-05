function recomendar(parametro){

let peliculaRecomendacion = document.getElementById("recomendacion");
let edadCliente = document.getElementById("edadCliente").value;


 switch(parametro){
    case "terror":
        if (edadCliente <= 13) {
            peliculaRecomendacion.textContent = "Te recomendamos ver: La mansion embrujada, casper, Los locos adamas y abracadabra";
        }else{
            if (edadCliente > 13 && edadCliente < 18 ){
                peliculaRecomendacion.textContent = "Te recomendamos ver: Detras de ti, Historias de miedo, La posecion de veronica y la hierba alta";  
                }else{
                    peliculaRecomendacion.textContent ="Te recomendamos ver: El conjuro, Hereditary, La matanza de Texas, Get Out ";
                }           
            }
        break;

    case "comedia":
        if (edadCliente <= 13) {
            peliculaRecomendacion.textContent = "Te recomendamos ver: Los increibles, Los minions, Mi villano favorito y buscando a nemo";
        }else{
            if (edadCliente > 13 && edadCliente < 18 ){
                peliculaRecomendacion.textContent = "Te recomendamos ver: Dog un viaje salvaje, Los tipos malos, No manches frida y son como niños";  
                }else{
                    peliculaRecomendacion.textContent ="Te recomendamos ver: TED, Scary movie, ¿Que paso ayer?, el abuelo";
                }           
            }
        break;

    case "accion":
        if (edadCliente <= 13) {
            peliculaRecomendacion.textContent = "Te recomendamos ver: mini espias, Raya y el ultimo dragon, King kong, Valiente";
        }else{
            if (edadCliente > 13 && edadCliente < 18 ){
                peliculaRecomendacion.textContent = "Te recomendamos ver: Piratas del caribe, ralph el demoledor, iron man, capitan america";  
                }else{
                    peliculaRecomendacion.textContent ="Te recomendamos ver: Los mercenarios, El transportador, Rocky, Creed";
                }           
            }
        break;
        
    case "drama":
        if (edadCliente <= 13) {
            peliculaRecomendacion.textContent = "Te recomendamos ver: E.T el extraterrestre, Up, una aventura en altura, Hugo, El higante de hierro";
        }else{
            if (edadCliente > 13 && edadCliente < 18 ){
                peliculaRecomendacion.textContent = "Te recomendamos ver: Harry poter, Noche en el museo, Shrek, Como entrenar a mi dragon";  
                }else{
                    peliculaRecomendacion.textContent ="Te recomendamos ver: La idea de ti , Lo imposible, Amor y otras drogas, El planeta de los simios";
                }           
            }
        break;
 }
}