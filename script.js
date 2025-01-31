// Código para el "Consejo del día"
const consejos = [
    "Tómate un momento para respirar profundamente.",
    "Organiza tus tareas por prioridades.",
    "Haz una pausa cada hora para estirarte.",
    "Mantén tu espacio de trabajo ordenado.",
    "Dedica tiempo a actividades que te relajen.",
    "Habla con alguien de confianza sobre cómo te sientes.",
    "Prueba técnicas de meditación para reducir el estrés.",
    "Escribe en un diario tus pensamientos y emociones.",
    "Escucha música relajante para calmarte.",
    "Date un baño caliente antes de dormir."
];

function obtenerConsejoDelDia() {
    const fecha = new Date();
    const diaDelAnio = Math.floor((fecha - new Date(fecha.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const indice = diaDelAnio % consejos.length;
    return consejos[indice];
}

document.getElementById('tip').textContent = obtenerConsejoDelDia();

// Código para los botones de tareas
const tareasSugeridas = [
    "Haz una caminata de 10 minutos.",
    "Escribe tres cosas por las que estás agradecido.",
    "Lee un libro durante 15 minutos.",
    "Practica yoga o estiramientos.",
    "Llama a un amigo o familiar.",
    "Escucha tu canción favorita.",
    "Prueba una nueva receta de cocina.",
    "Dedica 5 minutos a meditar.",
    "Organiza tu espacio de trabajo.",
    "Haz una lista de tus metas a corto plazo."
];

document.getElementById('get-suggestion').addEventListener('click', () => {
    const tareaAleatoria = tareasSugeridas[Math.floor(Math.random() * tareasSugeridas.length)];
    document.getElementById('suggestion').textContent = tareaAleatoria;
});

document.getElementById('add-suggested-task').addEventListener('click', () => {
    const tareaSugerida = document.getElementById('suggestion').textContent;
    if (tareaSugerida) {
        agregarTareaALista(tareaSugerida);
    }
});

document.getElementById('add-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nuevaTarea = document.getElementById('new-task').value;
    if (nuevaTarea) {
        agregarTareaALista(nuevaTarea);
        document.getElementById('new-task').value = ''; // Limpiar el campo de entrada
    }
});

function agregarTareaALista(tarea) {
    const listaTareas = document.getElementById('tasks');
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tarea;
    listaTareas.appendChild(nuevaTarea);
}
