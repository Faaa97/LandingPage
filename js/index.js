function validacion() {
    var nombre = document.forms["suscripcion"]["nombref"].value;
    var apellidos = document.forms["suscripcion"]["apellidosf"].value;
    var email = document.forms["suscripcion"]["emailf"].value;
  
    if (!RegExp("[a-zA-Z ]+").test(nombre)) {
        alert("Introduce un nombre válido");
        return false;
    }
    if (!RegExp("[a-zA-Z ]+").test(apellidos)) {
        alert("Introduce unos apellidos válidos");
        return false;
    }
    if(!RegExp("[a-zA-Z0-9\\.]{2,}@[a-zA-Z]{3,}\\.[a-zA-Z]{2,}").test(email)){
        alert("Introduce un correo electrónico válido");
          return false;
    }
    return true;
}