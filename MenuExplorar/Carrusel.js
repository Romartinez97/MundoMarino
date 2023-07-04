function inicializarCarrusel($imagenes) {

    // Variable para llevar el seguimiento de la imagen actual
    var $imagenActual = 0;
    // Función para mostrar la imagen actual en el carrusel
    function mostrarImagen() {
        var $carrusel = document.getElementById("carruselFotos");
        $carrusel.innerHTML = "<img src='" + $imagenes[$imagenActual] + "'>";
    }

    // Función para avanzar al siguiente imagen en el carrusel
    function siguienteImagen() {
        $imagenActual++;
        if ($imagenActual >= $imagenes.length) {
            $imagenActual = 0;
        }
        mostrarImagen();
    }

    // Mostrar la imagen inicial al cargar la página
    window.onload = function () {
        mostrarImagen();

        // Automatización del carrusel cada 3 segundos
        setInterval(siguienteImagen, 3000);

    };
}


function inicializarCarruselInteractivo($contenedor, $botonAnterior, $botonSiguiente, $imagenes) {

    // Variable para llevar el seguimiento de la imagen actual
    var $imagenActual = 0;

    // Función para mostrar la imagen actual en el carrusel
    function mostrarImagen() {
        $contenedor.innerHTML = "<img src='" + $imagenes[$imagenActual] + "'>";
    }

    $botonAnterior.addEventListener('click', function () {
        $imagenActual--;
        if ($imagenActual < 0) {
            $imagenActual = $imagenes.length - 1;
        }
        mostrarImagen();
    });

    $botonSiguiente.addEventListener('click', function () {
        $imagenActual++;
        if ($imagenActual >= $imagenes.length) {
            $imagenActual = 0;
        }
        mostrarImagen();
    });

    mostrarImagen();
}

