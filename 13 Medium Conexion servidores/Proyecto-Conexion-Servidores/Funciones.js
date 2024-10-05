


async function obtenerDatos() {
    try {
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            let cuerpoTabla = document.getElementById("Tbody");
            let salida = "";
            for(let elemento of data.dispositivos){
                salida += `
                    <tr>
                        <td>${elemento.id}</td>
                        <td>${elemento.marca}</td>
                        <td>${elemento.modelo}</td>
                        <td>${elemento.color}</td>
                        <td>${elemento.almacenamiento} GB</td>
                        <td>${elemento.procesador}</td>
                    </tr>
                `;
            } 
            cuerpoTabla.innerHTML = salida;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

function ConsultaIndividual(){
    let consulta = document.getElementById("consultaID").value;

    axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + consulta)
    .then(respuesta => {
        
        if( consulta === ""){
            alert("No has ingresado un valor")
        }else{

            let dispositivo = respuesta.data

            let AreaDeInformacion1 = document.getElementById("MarcaDispositivo");
            let AreaDeInformacion2 = document.getElementById("ModeloDispositivo");
            let AreaDeInformacion3 = document.getElementById("ColorDispositivo");
            let AreaDeInformacion4 = document.getElementById("AlmacenamientoDispositivo");
            let AreaDeInformacion5 = document.getElementById("ProcesadorDispositivo");

            AreaDeInformacion1.textContent = dispositivo.marca;
            AreaDeInformacion2.textContent = dispositivo.modelo;
            AreaDeInformacion3.textContent = dispositivo.color;
            AreaDeInformacion4.textContent = dispositivo.almacenamiento;
            AreaDeInformacion5.textContent = dispositivo.procesador;
      
        };
    });
}

function Editar(){
try{
    let consultaID = document.getElementById("consultaID").value;
    let marca = document.getElementById("MarcaDispositivo").value;
    let modelo = document.getElementById("ModeloDispositivo").value;
    let color = document.getElementById("ColorDispositivo").value;
    let almacenamiento = document.getElementById("AlmacenamientoDispositivo").value;
    let procesador = document.getElementById("ProcesadorDispositivo").value;

    let datos ={
        marca: marca,
        modelo : modelo,
        color : color,
        almacenamiento: almacenamiento,
        procesador : procesador
    }

    axios.put('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + consultaID , datos)
    .then(respuesta => {
        let dispositivo = respuesta.data;
        alert("Edicion realizada con exito " 
            + " Marca del dispositivo: "+ dispositivo.marca
            + " Modelo del dispositivo: " + dispositivo.modelo
            + " Color del dispositivo: " + dispositivo.color
            + " Almacenamiento del dispositivo: " + dispositivo.almacenamiento
            + " Procesador del dispositivo: " + dispositivo.procesador , console.log(respuesta.data))})
    .catch(error => alert("Sucedio un error: " + error))
}catch{
    console.log("Ocurrio un error inesperado")
}
    
}

function borrar(){

    let consultaID = document.getElementById("consultaID").value;
    axios.delete('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/'+ consultaID)
    .then(resultados => alert("Borrado con exito" + resultados.data, console.log(resultados.data)))
    .catch(error => alert(error))
}

function enviar(){
    try{    

        let consultaID = document.getElementById("EnviarD1").value;
        let modelo = document.getElementById("EnviarD2").value;
        let color = document.getElementById("EnviarD3").value;
        let marca = document.getElementById("EnviarD4").value;
        let almacenamiento = document.getElementById("EnviarD5").value;
        let procesador = document.getElementById("EnviarD6").value;

        let datos ={
            id : consultaID,
            marca: marca,
            modelo : modelo,
            color : color,
            almacenamiento: almacenamiento,
            procesador : procesador
        }
    
    axios.post('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/',datos )
    .then(respuesta => {
        let dispositivo = respuesta.data;
        alert("Se publico efectivamente el producto" + dispositivo.id)})
    .catch(error => alert("Hemos tenido un error: " + error))

}catch{
    Error => console.log("Acaba de suceder un error al enviar la información: " + Error);
}
}