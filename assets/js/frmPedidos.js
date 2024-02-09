var datosProductor = [
    ["Canilleras", "S/. 180.00", "S/. 150.00", "Canilleras especialmente fabricdas para los deportes de contacto."],
    ["Casco","S/. 100.00","S/. 89.00","Casco con tres capas de relleno para maxima proteccion."],
    ["Guantes","S/. 110.00","S/. 90.00","Guantes de box de maxima resistencia."],
    ["Pads","S/. 70.00","S/. 65.00","Equipo para practicar con total proteccion combinaciones."],
    ["Pera Loca","S/. 50.00","S/. 40.00","Pera loca para la practica de reflejos."],
    ["Sacos","S/. 220.00","S/. 190.00","Sacos de alta resistencia."],
    ["Short","S/. 150.00","S/. 100.00","Short de alta resistencia para la practica de deportes de contacto."],
    ["Soga","S/. 30.00","S/. 15.00","Perfecto para mejorar la resistencia."],
    ["Tobilleras","S/. 30.00","S/. 20.00","Tobilleras de alta resistencia."],
    ["Vendas","S/. 25.00","S/. 15.00","Proteccion asegurada para las manos al momento de golpear el saco o sparring."]
]

$(document).ready(function () {
    /**$(".btn-primary").click(function () {
        alert("I want this to appear after the modal has opened!");
    });*/

    $('#modalProducto').on('show.bs.modal', function (event) {
        var button = event.relatedTarget
        // extrae la informacion de data-bs-* attributes
        var recipient = button.getAttribute('data-bs-whatever');
        var valor = datosProductor[recipient-1];
        console.log(recipient);
        console.log(valor);
    });

});