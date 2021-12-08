$(document).ready(function() {
    consultarTipoCambio();
});

function consultarTipoCambio() {
    $("#divSelect").html("<select>" +
                            "<option>3000</option>" +
                            "<option>4000</option>" +
                        "<select>"
                        );

    $.ajax({
        url: '../backend/controller/tipoCambio.php',
        type: 'POST',
        data: {
            action: "consultarTipoCambio"
        },
        error: function () { //si existe error en la respuesta de ajax
            alert("Error al consultar el tipo de cambio");
        },
        success: function(data) {
            var json = JSON.parse(data.trim());
            alert(json.compra);
            alert(json.venta);
        }
    });
}