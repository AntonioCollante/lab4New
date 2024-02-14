//Expresion regular para validar formato de correo
var expRegEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


//funcion flecha que recibe tipo de alerte y mensaje a mostrar en alert
const alert = (mensaje, tipo) => {
    let div = "<div class='alert alert-" + tipo + " alert-dismissible' role='alert'>" +
        "<div>" + mensaje + "</div>" +
        "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>" +
        "</div>";
    $("#alert_msg").html(div);
}

//tipo de div alert bootstrat
alertArray = [
    "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"
];

//funcion para ejecutar alert dando un tiempo para que se oculte
function ejecutarAlert(mensaje, tipo) {
    alert(mensaje, tipo);
    $("#alert_msg").fadeTo(2000, 500).slideUp(500, function () {
        $("#alert_msg").slideUp(500);
    });
}

//Funcion que valida el formato de la contraseña
function validarContraseña(p1) {
    var noValido = / /;

    if (p1.length < 8 //validar longitud contraseña
        || !p1.match(/[A-z]/) //validar letra
        || !p1.match(/[A-Z]/) //validar letra mayúscula
        || !p1.match(/\d/) //validar numero
        || noValido.test(p1) // se chequea el regex de que el string no tenga espacio
        ) {
        return false;
    }

    return true;

}





