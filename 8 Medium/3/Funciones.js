class Mascotas {
    constructor(nombre, peso, edad){
        this.nombre=nombre;
        this.peso=peso;
        this.edad=edad;
    };
    informacion(){
        let lista = ` ${this.nombre} - ${this.peso}kg - ${this.edad} años`;
        return lista;
    };
};

class perro extends Mascotas {
    constructor(nombre, peso, edad, raza){
        super(nombre,peso,edad);
        this.raza=raza;
    }
    informacion(){
        let lista = `${this.nombre} - ${this.peso}kg - ${this.edad} años - ${this.raza}`;
        return lista;}
}


class gato extends Mascotas {
    constructor(nombre, peso, edad, sexo){
        super(nombre,peso,edad);
        this.sexo=sexo;
    }
        informacion(){
        let lista = `${this.nombre} - ${this.peso}kg - ${this.edad} años - ${this.sexo}`;
        return lista;
    }
}

class conejo extends Mascotas {
    constructor(nombre, peso, edad, color){
        super(nombre,peso,edad);
        this.color=color;
    }
    informacion(){
        let lista = `${this.nombre} - ${this.peso}kg - ${this.edad} años - ${this.color}`;
        return lista;
    }
}

let perro1 = new perro("Mcgreegor", 4, 2, "pincher");
let gato1 = new gato("Luna", 2, 3, "Mujer");
let conejo1 = new conejo("Salticos", 6, 5, "blanco");

let array = [perro1, gato1, conejo1];

function ObtenerInformacion(){
    let ul = document.getElementById("ListaPadre");
    for(let x of array){
        let li = document.createElement("li");
        li.innerText = x.informacion();
        ul.appendChild(li);
    }
};