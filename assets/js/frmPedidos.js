var datosProductor = [
    ["Canilleras", "S/. 180.00", "S/. 150.00", "Canilleras especialmente fabricdas para los deportes de contacto.", "assets/img/canilleras.jpg", ["Negro", "Azul", "Blanco", "Rojo", "Verde"], ["S", "M", "L", "XL"]],
    ["Casco", "S/. 100.00", "S/. 89.00", "Casco con tres capas de relleno para maxima proteccion.", "assets/img/casco.jpg", ["Negro", "Azul", "Blanco", "Rojo"], ["S", "M", "L"]],
    ["Guantes", "S/. 110.00", "S/. 90.00", "Guantes de box de maxima resistencia.", "assets/img/guantes.webp", ["Negro", "Azul", "Blanco", "Rojo", "Verde", "Rosados"], ["12onz", "16onz"]],
    ["Pads", "S/. 70.00", "S/. 65.00", "Equipo para practicar con total proteccion combinaciones.", "assets/img/pads.jpg", ["Negro", "Rojo"], []],
    ["Pera Loca", "S/. 50.00", "S/. 40.00", "Pera loca para la practica de reflejos.", "assets/img/peraloca.jpg", ["Negro", "Rojo", "Verde"], []],
    ["Sacos", "S/. 220.00", "S/. 190.00", "Sacos de alta resistencia.", "assets/img/sacos.webp", ["Negro", "Azul"], ["S", "M", "L", "XL"]],
    ["Short", "S/. 150.00", "S/. 100.00", "Short de alta resistencia para la practica de deportes de contacto.", "assets/img/short.webp", ["Negro", "Azul", "Blanco", "Rojo"], ["S", "M", "L", "XL"]],
    ["Soga", "S/. 30.00", "S/. 15.00", "Perfecto para mejorar la resistencia.", "assets/img/soga.jpg", ["Negro", "Azul", "Verde"], []],
    ["Tobilleras", "S/. 30.00", "S/. 20.00", "Tobilleras de alta resistencia.", "assets/img/tobilleras.jpg", ["Negro", "Verde", "Rosado"], ["S", "M", "L", "XL"]],
    ["Vendas", "S/. 25.00", "S/. 15.00", "Proteccion asegurada para las manos al momento de golpear el saco o sparring.", "assets/img/vendas.webp", ["Negro", "Azul", "Blanco", "Rojo", "Verde", "Amarillo", "Celeste"], []]
]

$(document).ready(function () {
    /**$(".btn-primary").click(function () {
        alert("I want this to appear after the modal has opened!");
    });*/

    $('#modalProducto').on('show.bs.modal', function (event) {
        var button = event.relatedTarget
        // extrae la informacion de data-bs-* attributes
        var recipient = button.getAttribute('data-bs-whatever');
        var valor = datosProductor[recipient - 1];

        console.log(recipient);
        console.log(valor);

        $('#nombrePrdModal').text(valor[0]);
        $('#precio1Modal').text(valor[1]);
        $('#precio2Modal').text(valor[2]);
        $("#descripModal").text(valor[3]);
        $("#imgModal").attr("src", valor[4]);

        /**Obtengo los arreglos de colores y tallas */
        var arrayColores = valor[5];
        var arrayTallas = valor[6];

        /**Se crea variable para armar el string html */
        let divColores = "Colores: <ul type='A'>";
        /**se itera array de colores para crear la lista */
         $.each(arrayColores, function (index, value) {
            divColores += "<li>"+value+"</li>";
        });
        divColores += "</ul >";
        //genero el html en el  div colore
        $("#divColores").html(divColores);

        /**Se crea variable para armar el string html */
        let divTallas = "Tallas: <ul type='A'>";
        /**se itera array de tallas para crear la lista */
         $.each(arrayTallas, function (index, value) {
            divTallas += "<li>"+value+"</li>";
        });
        divTallas += "</ul >";
        //genero el html en el  div colore
        $("#divTallas").html(divTallas);

    });

});