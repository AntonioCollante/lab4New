var datosProductor = [
    ["Canilleras", "S/. 180.00", "S/. 150.00", "Canilleras especialmente fabricdas para los deportes de contacto.","assets/img/canilleras.jpg"],
    ["Casco","S/. 100.00","S/. 89.00","Casco con tres capas de relleno para maxima proteccion.","assets/img/casco.jpg"],
    ["Guantes","S/. 110.00","S/. 90.00","Guantes de box de maxima resistencia.","assets/img/guantes.webp"],
    ["Pads","S/. 70.00","S/. 65.00","Equipo para practicar con total proteccion combinaciones.","assets/img/pads.jpg"],
    ["Pera Loca","S/. 50.00","S/. 40.00","Pera loca para la practica de reflejos.","assets/img/peraloca.jpg"],
    ["Sacos","S/. 220.00","S/. 190.00","Sacos de alta resistencia.","assets/img/sacos.webp"],
    ["Short","S/. 150.00","S/. 100.00","Short de alta resistencia para la practica de deportes de contacto.","assets/img/short.webp"],
    ["Soga","S/. 30.00","S/. 15.00","Perfecto para mejorar la resistencia.","assets/img/soga.jpg"],
    ["Tobilleras","S/. 30.00","S/. 20.00","Tobilleras de alta resistencia.","assets/img/tobilleras.jpg"],
    ["Vendas","S/. 25.00","S/. 15.00","Proteccion asegurada para las manos al momento de golpear el saco o sparring.","assets/img/vendas.webp"]
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

        $('#nombrePrdModal').text( valor[0] );
        $('#precio1Modal').text( valor[1] );
        $('#precio2Modal').text( valor[2] );
        $("#descripModal").text( valor[3] );
        $("#imgModal").attr("src",valor[4]);
        
    });

});