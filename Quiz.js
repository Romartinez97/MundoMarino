//https://www.youtube.com/watch?v=PBcqGxrr9g8&t=3s

var $preguntas = [
    {
        $pregunta: "¿Cuál de las siguientes características NO es común en los crustáceos?",
        $respuestas: [
            { texto: "Poseen un exoesqueleto duro", correcta: false },
            { texto: "Tienen apéndices articulados", correcta: false },
            { texto: "Son animales acuáticos", correcta: false },
            { texto: "Son vertebrados", correcta: true },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes animales pertenece al grupo de los equinodermos?",
        $respuestas: [
            { texto: "Estrella de mar", correcta: true },
            { texto: "Caracol", correcta: false },
            { texto: "Pingüino", correcta: false },
            { texto: "Pulpo", correcta: false },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes grupos de animales incluye a las ballenas, los delfines y los manatíes?",
        $respuestas: [
            { texto: "Moluscos", correcta: false },
            { texto: "Crustáceos", correcta: false },
            { texto: "Equindoermos", correcta: false },
            { texto: "Mamíferos", correcta: true },
        ]
    },
    {
        $pregunta: "¿Cuál de las siguientes características NO es común en los moluscos?",
        $respuestas: [
            { texto: "Poseen un cuerpo blando", correcta: false },
            { texto: "Tienen una concha protectora", correcta: false },
            { texto: "Algunos tienen tentáculos", correcta: false },
            { texto: "Son animales terrestres", correcta: true },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes grupos de animales tiene simetría radial?",
        $respuestas: [
            { texto: "Crustáceos", correcta: false },
            { texto: "Moluscos", correcta: false },
            { texto: "Equinodermos", correcta: true },
            { texto: "Peces", correcta: false },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes crustáceos es conocido por su caparazón duro y sus grandes pinzas?",
        $respuestas: [
            { texto: "Cangrejo ermitaño", correcta: false },
            { texto: "Langosta", correcta: true },
            { texto: "Camarón", correcta: false },
            { texto: "Cangrejo de río", correcta: false },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes animales marinos se caracteriza por su capacidad de regenerar sus brazos si se pierden?",
        $respuestas: [
            { texto: "Estrella de mar", correcta: true },
            { texto: "Caracol", correcta: false },
            { texto: "Pez payaso", correcta: false },
            { texto: "Ballena", correcta: false },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes animales tiene una concha externa para protección?",
        $respuestas: [
            { texto: "Estrella de mar", correcta: false },
            { texto: "Almeja", correcta: true },
            { texto: "Pulpo", correcta: false },
            { texto: "Tiburón", correcta: false },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes animales es conocido por su capacidad de cambiar de color y expulsar tinta como mecanismo de defensa?",
        $respuestas: [
            { texto: "Pez payaso", correcta: false },
            { texto: "Cangrejo ermitaño", correcta: false },
            { texto: "Pulpo", correcta: true },
            { texto: "Estrella de mar", correcta: false },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes grupos de animales incluye a los erizos de mar y los pepinos de mar?",
        $respuestas: [
            { texto: "Crustáceos", correcta: false },
            { texto: "Equinodermos", correcta: true },
            { texto: "Moluscos", correcta: false },
            { texto: "Peces", correcta: false },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes mamíferos acuáticos se caracteriza por su largo hocico y su capacidad de ecolocalización?",
        $respuestas: [
            { texto: "Foca", correcta: false },
            { texto: "Manatí", correcta: false },
            { texto: "Delfín", correcta: true },
            { texto: "Ballena", correcta: false },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes animales es conocido por su habilidad para camuflarse y cambiar de forma?",
        $respuestas: [
            { texto: "Calamar", correcta: true },
            { texto: "Estrella de mar", correcta: false },
            { texto: "Cangrejo ermitaño", correcta: false },
            { texto: "Pepino de mar", correcta: false },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes animales acuáticos se caracteriza por su esqueleto de cartílago en lugar de huesos?",
        $respuestas: [
            { texto: "Almeja", correcta: false },
            { texto: "Ballena", correcta: false },
            { texto: "Tiburón", correcta: true },
            { texto: "Delfín", correcta: false },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes animales se caracteriza por tener agallas y respirar bajo el agua?",
        $respuestas: [
            { texto: "Ballena", correcta: false },
            { texto: "Delfín", correcta: false },
            { texto: "Cangrejo", correcta: false },
            { texto: "Pez", correcta: true },
        ]
    },
    {
        $pregunta: "¿Cuál de los siguientes grupos de animales se caracteriza por su esqueleto interno calcáreo?",
        $respuestas: [
            { texto: "Mamíferos", correcta: false },
            { texto: "Cnidarios", correcta: false },
            { texto: "Equinodermos", correcta: true },
            { texto: "Peces", correcta: false },
        ]
    }
];

var $elementoPregunta = document.getElementById("pregunta");
var $contenedorBotones = document.getElementById("botonesRespuestas");
var $botonSiguiente = document.getElementById("botonSiguiente");
var $botonInicio = document.getElementById("botonInicio");
var $fotoCorrecto = document.getElementById("fotoCorrecto");
var $fotoIncorrecto = document.getElementById("fotoIncorrecto");

var $indicePreguntaActual = 0;
var $puntuacion = 0;

$contenedorBotones.style.display = "none";

$botonInicio.addEventListener("click", empezarQuiz);

function empezarQuiz() {
    $indicePreguntaActual = 0;
    $puntuacion = 0;
    $botonInicio.style.display = "none";
    $botonSiguiente.innerHTML = "Siguiente pregunta";
    $contenedorBotones.style.display = "block";
    mostrarPregunta();
}

function mostrarPregunta() {
    reiniciar();
    var $preguntaActual = $preguntas[$indicePreguntaActual];
    var $numeroPregunta = $indicePreguntaActual + 1;
    $elementoPregunta.innerHTML = $numeroPregunta + ". " + $preguntaActual.$pregunta

    $preguntaActual.$respuestas.forEach($respuesta => {
        var $botonRespuesta = document.createElement("button");
        $botonRespuesta.innerHTML = $respuesta.texto;
        $botonRespuesta.classList.add("boton");
        $contenedorBotones.appendChild($botonRespuesta);
        if ($respuesta.correcta) {
            $botonRespuesta.dataset.correcta = $respuesta.correcta;
        }
        $botonRespuesta.addEventListener("click", elegirRespuesta);
    })
}

function reiniciar() {
    $botonSiguiente.style.display = "none";
    while ($contenedorBotones.firstChild) {
        $contenedorBotones.removeChild($contenedorBotones.firstChild);
    }
}

function elegirRespuesta($b) {
    var $botonSeleccionado = $b.target;
    var $esCorrecta = $botonSeleccionado.dataset.correcta === "true";

    if ($esCorrecta) {
        $botonSeleccionado.classList.add("correcta");
        $puntuacion++;
        $fotoCorrecto.style.display = "block";

    } else {
        $botonSeleccionado.classList.add("incorrecta");
        $fotoIncorrecto.style.display = "block";
    }

    Array.from($contenedorBotones.children).forEach($botonRespuesta => {
        if ($botonRespuesta.dataset.correcta === "true") {
            $botonRespuesta.classList.add("correcta");
        }
        $botonRespuesta.disabled = true;
    });

    $botonSiguiente.style.display = "block";
}

function mostrarPuntuacion() {
    reiniciar();
    if ($puntuacion == 0) {
        $elementoPregunta.innerHTML = `Tu puntuación es ${$puntuacion} de ${$preguntas.length}. No acertaste ninguna respuesta, ¡seguí practicando!`;
    } else if ($puntuacion <= 5) {
        $elementoPregunta.innerHTML = `Tu puntuación es ${$puntuacion} de ${$preguntas.length}. ¡Seguí mejorando!`;
    } else if ($puntuacion <= 10) {
        $elementoPregunta.innerHTML = `Tu puntuación es ${$puntuacion} de ${$preguntas.length}. ¡Vas por buen camino!`;
    } else {
        $elementoPregunta.innerHTML = `Tu puntuación es ${$puntuacion} de ${$preguntas.length}. ¡Felicitaciones, sos un experto!`;
    }
    $botonSiguiente.innerHTML = "Jugar de nuevo";
    $botonSiguiente.style.display = "block";
}

function handleNextButton() {
    $indicePreguntaActual++;
    $fotoCorrecto.style.display = "";
    $fotoIncorrecto.style.display = "";
    if ($indicePreguntaActual < $preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarPuntuacion();
    }
}

$botonSiguiente.addEventListener("click", () => {
    if ($indicePreguntaActual < $preguntas.length) {
        handleNextButton();
    } else {
        empezarQuiz();
    }
})
