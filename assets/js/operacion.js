document.addEventListener("DOMContentLoaded", function() { //el código JavaScript se ejecute cuando el DOM (Document Object Model) esta listo y permite interactuar con los elementos HTML.
    // Operacion
    function resultadoFinal() {
        const numeroDefinitivo = 500000;
        const numeroIngresado = parseInt(document.querySelector("#cantidad").value);

        if (Number.isInteger(numeroIngresado) && numeroIngresado >= 0) {
            const resultado = numeroDefinitivo * numeroIngresado;

            document.querySelector("#totalParrafo").textContent = "Total: " + resultado;
            document.querySelector("#cantidadParrafo").textContent = "Cantidad: " + numeroIngresado;

        } else {
            alert("Ingresa un número entero no negativo válido.");
            var circle = document.querySelector("#circle");
            circle.style.backgroundColor = "black";
        }
    }
    // Circulo de color
    function cambiarColor() {
        var color = document.querySelector("#colorInput").value;
        var circle = document.querySelector("#circle");
        circle.style.backgroundColor = color;
    }
    // Validar
    function validarCampos() {
        var valor1 = document.querySelector("#cantidad").value;
        var valor2 = document.querySelector("#colorInput").value;

        if (valor1 === "" || valor2 === "") {
            alert("Por favor, completa el campo de cantidad.");
            document.querySelector("#colorDiv").style.backgroundColor = valor2;
        } else {
            alert("Los campos no están vacíos. Acción realizada. Gracias.");
        }
    }
    // Reinicio
    function reiniciarPrograma() {
        document.querySelector("#cantidad").value = "";
        document.querySelector("#colorInput").value = "";

        document.querySelector("#totalParrafo").textContent = "Total: 0";
        document.querySelector("#cantidadParrafo").textContent = "Cantidad: 0";

        var circle = document.querySelector("#circle");
        circle.style.backgroundColor = "black";
    }

    // Eventos
    var btnTotal = document.querySelector("#btnTotal");
    btnTotal.addEventListener("click", function() {
        validarCampos();
        cambiarColor();
        resultadoFinal();
    });

    var btnReinicio = document.querySelector("#btnreinicio");
    btnReinicio.addEventListener("click", function() {
        reiniciarPrograma();
    });

    var colorInput = document.querySelector("#colorInput");
    colorInput.addEventListener("input", function() {
        cambiarColor();
    });
});

