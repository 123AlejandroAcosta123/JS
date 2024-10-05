function login() {
    const contraseñaRegex = /^[a-zA-Z0-9]+$/;
    
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;

    if(miPass.match(contraseñaRegex)){

        try {
            fetch('http://localhost:3000/usuarios/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: miEmail,
                    pass: miPass
                })
            })
            .then(respuesta => respuesta.text())
            .then(data => {
                if(data === ""){
                    alert("Login incorrecto");
                }else{
                    localStorage.setItem('token' , data); // LocalStorage nos guarda la variable a nivel global para el sitio web 
                    window.location.href = "home.html";
                }
            })
            .catch(error => { throw new Error("Error en la solicitud: " + error) })
        } catch (error) {
            console.error(error)
        }

    }   
}

function crear() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;

    const contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const emailRegex = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

    if(miPass.match(contraseñaRegex) && miEmail.match(emailRegex)){
        try {
            fetch('http://localhost:3000/usuarios/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: miEmail,
                    pass: miPass
                })
            })
            .then(alert("Usuario creado"))
            .catch(error => { throw new Error("Error en la solicitud: " + error) })
        } catch (error) {
            console.error(error)
        }
    }else{
        alert("Tu contraseña no cumple con los requisitos")
    }
    
}

/*function validar(name){
    const token = localStorage.getItem('token');
    try{
        
        fetch('http://localhost:3000/validate',{
            method: 'POST',
            headers:{
                "Content-type":"application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                permiso: name
            })
        })

        .then(respuesta => respuesta.text())

        .then(data => {
            if( data === ""){
                alert("No tienes permisos para ingresar")
            }else{
                window.location.href = data;
            }
        })

        .catch( error => {
            throw new Error ("error en la solicitud" + error);
        })

    }catch(error){
        console.log(error);
    }
}*/