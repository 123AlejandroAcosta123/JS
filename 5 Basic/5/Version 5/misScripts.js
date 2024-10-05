function loopShoop(contenedorID, min, cantidadTiendas){
    //Colocar id de donde se va a dejar la estructura de las tiendas
    let elementoContenedor = document.getElementById(contenedorID);
    // crear loop que repita la cantidad de tiendas a crear
    for(let conteoTiendas= 1;  conteoTiendas<=cantidadTiendas; conteoTiendas++){

    // Crear texto para los label    
    let textoEtiqueta = "Tienda " + conteoTiendas;
    // llamar funcion de creacion de estructura automatica
    let ContenedorEstructura =  CrearEstructura(textoEtiqueta, min);
    // agregar elemento creado a el contenedor
    elementoContenedor.appendChild(ContenedorEstructura);
    };
}

function CrearEstructura(textoLabel, MinNumber){
    // Crear elemento parrafo <p>
    let elementoParrafo = document.createElement("p");
    //Crear label <label>
    let elementoLabel = document.createElement("label");
    //Agregar atributo al label 
    elementoLabel.setAttribute("for", textoLabel);
    elementoLabel.innerText= textoLabel + ": ";
    //Crear elemento input 
    let elementoInput = document.createElement("input");
    //Agregar atributos a input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",MinNumber);
    elementoInput.setAttribute("value", 0);
    //Unir elementos
    elementoParrafo.appendChild(elementoLabel);
    elementoParrafo.appendChild(elementoInput);

    return elementoParrafo;

}

function extraerNumeroDesdeElemento(elemento) {
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular() {
    let ventas = [];
    let ItemsVentas = document.getElementById("ItemTienda");
    let psicionVentas = 0;

    for( let p of ItemsVentas.children){
        let ExtaerValor = extraerNumeroDesdeElemento(p.children[1]) 
        ventas[psicionVentas] = ExtaerValor;
         psicionVentas = psicionVentas + 1;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for( p of ItemsVentas.children){
        let valor = extraerNumeroDesdeElemento(p.children[1]);
        let input = (p.children[1]);
        if(valor == ventaMayor){
            input.setAttribute('class','ValorMayor');
        }else {
            if (valor == ventaMenor){
                input.setAttribute('class','ValorMenor');
            }else{
                input.setAttribute('class','inputNormal');
            }
        }

    }

    let mensajeSalida = "Total Ventas: " + totalVentas 

    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}

function sumarTotal(array) {
    let total = 0;

    for(let venta of array) {
        total = total + venta;
    }

    return total;
}

function calcularMayor(array) {
    let maximo = array[0];

    for(let venta of array) {
        if (venta > maximo){
            maximo = venta;
        }
    }

    return maximo;
}

function calcularMenor(array) {
    let minimo = array[0];

    for(let venta of array) {
        if (venta < minimo){
            minimo = venta;
        }
    }

    return minimo;
} 