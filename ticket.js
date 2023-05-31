function calcularTotal() {
    var cantidadTickets = parseInt(document.getElementById("cantidadTickets").value);
    var categoriaSeleccionada = document.getElementById("categoriaSelect").value;

    if (categoriaSeleccionada) {
        var precioTicket = 200;
        var descuento = 0;

        if (categoriaSeleccionada === "estudiante") {
            descuento = 0.8; // 80% de descuento
        } else if (categoriaSeleccionada === "trainee") {
            descuento = 0.5; // 50% de descuento
        } else if (categoriaSeleccionada === "junior") {
            descuento = 0.15; // 15% de descuento
        }
        else if (categoriaSeleccionada === "sinCat") {
            descuento = 0; // 0% de descuento
        }


        var totalPagar = cantidadTickets * precioTicket * (1 - descuento);
        document.getElementById("totalArea").textContent = "Total a Pagar: $" + totalPagar.toFixed(2);
    } else {
        document.getElementById("totalArea").textContent = "Por favor, seleccione una categoría.";
    }
}

function borrarCampos() {
    document.getElementById("formularioTickets").reset();
    document.getElementById("totalArea").textContent = "Total a Pagar: $0.00";
}

document.getElementById("cantidadTickets").addEventListener("input", calcularTotal);
document.getElementById("categoriaSelect").addEventListener("input", calcularTotal);
document.getElementById("borrarCampos").addEventListener("click", borrarCampos);