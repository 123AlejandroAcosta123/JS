function CrearEstructura(textoLabel, MinNumber){
    // Crear elemento parrafo <p>
    let elementoParrafo = document.createElement("p");
    //Crear label <label>
    let elementoLabel = document.createElement("label")
    //Agregar atributo al label 
    elementoLabel.setAttribute("for", textoLabel);
    //Crear elemento input 
    let elementoInput = document.createElement("input");
    //Agregar atributos a input
    elementoInput.setAttribute(type,Number);
    elementoInput.setAttribute(id,textoLabel);
    elementoInput.setAttribute(min,MinNumber);
    lementoInput.setAttribute(value,0);
    //Unir elementos
    elementoParrafo.appendChild(elementoLabel);
    elementoParrafo.appendChild(elementoInput);

    return elementoParrafo;

}

function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular() {
    let ventas = [];

    ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
    ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas + 
                        " / Venta Mayor: " + ventaMayor +
                        " / Venta Menor: " + ventaMenor;
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