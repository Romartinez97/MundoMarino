// VALIDACIÓN

function validar() {
    if (!verificarNumerosEnteros()) {
        verificarFechaReal();
    }
    if (verificarDatosObligatorios()) {
        verificarEmail();
    }
    verificarTelefono();
}

// Validación del input de la fecha de nacimiento, tanto si está vacío como si es un número entero mayor a 0
function verificarNumerosEnteros() {
    var $dia = document.getElementById("dia").value;
    var $mes = document.getElementById("mes").value;
    var $anio = document.getElementById("anio").value;
    var $numerosEnteros = true;
    var $mensajeError = "";

    if ($dia != "") {
        if (isNaN(parseInt($dia))) {
            $mensajeError += "El dato introducido en el campo 'Día' no corresponde a un número entero.<br><br>";
            document.getElementById("dia").style.backgroundColor = "rgb(192, 15, 15)";
            $numerosEnteros = false;
        } else if (parseInt($dia) < 1) {
            $mensajeError += "El dato introducido en el campo 'Día' no corresponde a un número mayor a 0.<br><br>";
            document.getElementById("dia").style.backgroundColor = "rgb(192, 15, 15)";
            $numerosEnteros = false;
        } else {
            document.getElementById("dia").style.backgroundColor = "";
        }
    }

    if ($mes != "") {
        if (isNaN(parseInt($mes))) {
            $mensajeError += "El dato introducido en el campo 'Mes' no corresponde a un número entero.<br><br>";
            document.getElementById("mes").style.backgroundColor = "rgb(192, 15, 15)";
            $numerosEnteros = false;
        } else if (parseInt($mes) < 1) {
            $mensajeError += "El dato introducido en el campo 'Mes' no corresponde a un número mayor a 0.<br><br>";
            document.getElementById("mes").style.backgroundColor = "rgb(192, 15, 15)";
            $numerosEnteros = false;
        } else {
            document.getElementById("dia").style.backgroundColor = "";
        }
    }

    if ($anio != "") {
        if (isNaN(parseInt($anio))) {
            $mensajeError += "El dato introducido en el campo 'Año' no corresponde a un número entero.<br><br>";
            document.getElementById("anio").style.backgroundColor = "rgb(192, 15, 15)";
            $numerosEnteros = false;
        } else if (parseInt($anio) < 1) {
            $mensajeError += "El dato introducido en el campo 'Año' no corresponde a un número mayor a 0.<br><br>";
            document.getElementById("anio").style.backgroundColor = "rgb(192, 15, 15)";
            $numerosEnteros = false;
        } else {
            document.getElementById("dia").style.backgroundColor = "";
        }
    }

    document.getElementById("errores").innerHTML = $mensajeError;
    if ($mensajeError != "") {
        document.getElementById("errores").style.display = "block";
    } else {
        document.getElementById("errores").style.display = "";
    }
    return $numerosEnteros;
}

// Función para verificar que la fecha ingresada sea una real
function verificarFechaReal() {
    var $dia = document.getElementById("dia").value;
    var $mes = document.getElementById("mes").value;
    var $anio = document.getElementById("anio").value;
    var $fecha = new Date(parseInt($anio), parseInt($mes) - 1, parseInt($dia));

    if (
        !($fecha.getDate() == $dia &&
            $fecha.getMonth() == $mes - 1 &&
            $fecha.getFullYear() == $anio)
    ) {
        document.getElementById("dia").style.backgroundColor = "rgb(192, 15, 15)";
        document.getElementById("mes").style.backgroundColor = "rgb(192, 15, 15)";
        document.getElementById("anio").style.backgroundColor = "rgb(192, 15, 15)";
        document.getElementById("errores").innerHTML = "La fecha introducida no es válida, no pertenece a una fecha real. <br><br>"
        document.getElementById("errores").style.display = "block";
    } else {
        document.getElementById("dia").style.backgroundColor = "";
        document.getElementById("mes").style.backgroundColor = "";
        document.getElementById("anio").style.backgroundColor = "";
        document.getElementById("errores").style.display = "";
    }

}


// Función para verificar que un número de teléfono solo esté compuesto por números
function verificarTelefono() {
    var $telefono = document.getElementById("telefono").value;

    if ($telefono != "") {
        if (isNaN(parseInt($telefono))) {
            document.getElementById("telefono").style.backgroundColor = "rgb(192, 15, 15)";
            document.getElementById("errores").innerHTML += "El campo 'teléfono' solo debe estar compuesto por números enteros.<br><br>";
            document.getElementById("errores").style.display = "block";
        } else if ($telefono.length > 11 || $telefono.length<10) {
            document.getElementById("telefono").style.backgroundColor = "rgb(192, 15, 15)";
            document.getElementById("errores").innerHTML += "El número de teléfono debe estar compuesto por entre 10 y 11 números.<br><br>"
            document.getElementById("errores").style.display = "block";
        } else {
            document.getElementById("telefono").style.backgroundColor = "";
            document.getElementById("errores").style.display = "";
        }
    }

}

// Función para verificar que los datos que son obligatorios sean completados
function verificarDatosObligatorios() {

    var $nombre = document.getElementById("nombre").value;
    var $apellido = document.getElementById("apellido").value;
    var $email = document.getElementById("correo").value;
    var $provincia = document.getElementById("provincia").value;
    var $mensaje = document.getElementById("mensaje").value;
    var $mensajeError = document.getElementById("errores");
    var $hayErrores = false;
    var $campoEmailCompleto = true;

    if ($nombre == "" || $nombre == null) {
        document.getElementById("nombre").style.backgroundColor = "rgb(192, 15, 15)";
        $mensajeError.innerHTML += "El campo 'Nombre' es obligatorio. <br><br>";
        $hayErrores = true;
    } else {
        document.getElementById("nombre").style.backgroundColor = "";
    }

    if ($apellido == "") {
        document.getElementById("apellido").style.backgroundColor = "rgb(192, 15, 15)";
        $mensajeError.innerHTML += "El campo 'Apellido' es obligatorio. <br><br>";
        $hayErrores = true;
    } else {
        document.getElementById("apellido").style.backgroundColor = "";
    }

    if ($email == "") {
        document.getElementById("correo").style.backgroundColor = "rgb(192, 15, 15)";
        $mensajeError.innerHTML += "El campo 'Email' es obligatorio. <br><br>";
        $hayErrores = true;
        $campoEmailCompleto = false;
    } else {
        document.getElementById("correo").style.backgroundColor = "";
    }

    if ($provincia == "Seleccione su provincia") {
        document.getElementById("provincia").style.backgroundColor = "rgb(192, 15, 15)";
        $mensajeError.innerHTML += "El campo 'Provincia' es obligatorio. <br><br>";
        $hayErrores = true;
    } else {
        document.getElementById("provincia").style.backgroundColor = "";
    }

    if ($mensaje == "" || $mensaje == null) {
        document.getElementById("mensaje").style.backgroundColor = "rgb(192, 15, 15)";
        $mensajeError.innerHTML += "El campo 'Mensaje' es obligatorio. <br><br>";
        $hayErrores = true;
    } else {
        document.getElementById("mensaje").style.backgroundColor = "";
    }

    if ($hayErrores) {
        document.getElementById("errores").style.display = "block";
    } else {
        document.getElementById("errores").style.display = "";
    }

    return $campoEmailCompleto;
}

// Función para verificar que el input en "email" sea correcto (que posea @ y .dominio)
function verificarEmail() {

    var $email = document.getElementById("correo").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var $mensajeError = document.getElementById("errores");

    if (regex.test($email) == false) {
        document.getElementById("correo").style.backgroundColor = "rgb(192, 15, 15)";
        $mensajeError.innerHTML += "El correo ingresado no tiene un formato válido. <br><br>";
    } else {
        document.getElementById("correo").style.backgroundColor = "";
    }
}
