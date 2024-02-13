//Expresion regular para validar formato de correo
var expRegEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            
//document.ready
$(function () {
    //inicio evento click de boton
    $("#login").click(function () {
        let email = $("#email").val();
        let clave = $("#password").val();
        if (email == "" || clave == "") {
            ejecutarAlert("Ingrese Email y/o Contraseña", alertArray[3]);
        } else {
            var esValido = expRegEmail.test(email);
            if (esValido == true) {
                //se redirige a inicio.html
                $(location).attr('href','inicio.html');
            } else {
                ejecutarAlert("Formato de Correo Incorrecto", alertArray[4]);
            }
        }
    });
    //fin evento click de boton

});

//funcion para ejecutar alert dando un tiempo para que se oculte
function ejecutarAlert(mensaje, tipo) {
    alert(mensaje, tipo);
    $("#alert_msg").fadeTo(2000, 500).slideUp(500, function () {
        $("#alert_msg").slideUp(500);
    });
}

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
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
];
