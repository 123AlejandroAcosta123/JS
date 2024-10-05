let ListaEmpleadors = [];

function EstructuraEmpleados(Legajo,Nombre,Apellido,FechaNacimiento,Cargo)
{
    this.legajo= Legajo;
    this.nombre= Nombre;
    this.apellido= Apellido;
    this.fechaNacimiento= FechaNacimiento;
    this.cargo = Cargo;
};

function subirDatos(){
    let legajo = document.getElementById("Inputlegajo").value;
    let nombre = document.getElementById("Inputnombre").value;
    let apellido = document.getElementById("Inputapellido").value;
    let fechaDeNacimiento = document.getElementById("InputfechaNacimiento").value;
    let Cargo = document.getElementById("Inputcargo").value;

    let empleado = new EstructuraEmpleados(legajo,nombre,apellido,fechaDeNacimiento,Cargo);

    ListaEmpleadors.push(empleado);

    alert("Empleado agreagado");
    limpardatos();
}

function mostrarDatos(){
    let texto = "";
    
    for(let empleado of ListaEmpleadors){
        for(let propiedad in empleado){
            texto = texto + propiedad + ": " + empleado[propiedad];
        }
        texto = texto +  "\n"; // Añade un salto de línea después de cada empleado
    }
    alert(texto);
}

function limpardatos(){
    document.getElementById("Inputlegajo").value = "";
    document.getElementById("Inputnombre").value = "";
    document.getElementById("Inputapellido").value = "";
    fechaDeNacimiento = document.getElementById("InputfechaNacimiento").value="";
    Cargo = document.getElementById("Inputcargo").value="";
    console.log
}