//document.ready
$(function () {
    //inicio evento click de boton
    $("#registrar").click(function () {
        let nombres = $("#nombres").val();
        let apellidos = $("#apellidos").val();
        let email = $("#email").val();
        let codTelf = $("#ciudadCode").val();
        let telefono = $("#telefono").val();
        let password = $("#password").val();
        let passwordConfirmation = $("#passwordConfirmation").val();

        if (nombres == "" || apellidos == "" ||
            email == "" || codTelf == null ||
            telefono == "" || password == "" ||
            passwordConfirmation == "") {
            ejecutarAlert("Ingrese todos los datos para poder registrarlo", alertArray[3]);
        } else {
            //valido con expresion regular el email
            var esValido = expRegEmail.test(email);
            if (esValido == true) {
                if (!validarContraseña(password)) {
                    ejecutarAlert("La contraseña debe contener un minimo de 8 carácteres alfanuméricos (a-z A-Z), contener mínimo un dígito (0-9).", alertArray[3]);
                } else {
                    if (password == passwordConfirmation) {
                        ejecutarAlert("Se ha creado su cuenta con exito", alertArray[2]);
                        //se redirige a login.html luego de 3 segundos
                        setTimeout(function(){ 
                            $(location).attr('href','login.html');
                          },3000);
                    } else {
                        ejecutarAlert("Las Contraseñas no coinciden", alertArray[4]);
                    }
                }
            } else {
                ejecutarAlert("Formato de Correo Incorrecto", alertArray[4]);
            }
        }

    });
    //fin evento click de boton

});