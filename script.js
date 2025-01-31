// Lista de tareas sugeridas
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

// Función para sugerir una tarea aleatoria
document.getElementById('get-suggestion').addEventListener('click', () => {
    const tareaAleatoria = tareasSugeridas[Math.floor(Math.random() * tareasSugeridas.length)];
    document.getElementById('suggestion').textContent = tareaAleatoria;
});

// Función para añadir la tarea sugerida a la lista
document.getElementById('add-suggested-task').addEventListener('click', () => {
    const tareaSugerida = document.getElementById('suggestion').textContent;
    if (tareaSugerida) {
        agregarTareaALista(tareaSugerida);
    }
});

// Función para añadir una tarea manual
document.getElementById('add-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nuevaTarea = document.getElementById('new-task').value;
    if (nuevaTarea) {
        agregarTareaALista(nuevaTarea);
        document.getElementById('new-task').value = ''; // Limpiar el campo de entrada
    }
});

// Función para agregar una tarea a la lista
function agregarTareaALista(tarea) {
    const listaTareas = document.getElementById('tasks');
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tarea;
    listaTareas.appendChild(nuevaTarea);
}

// ====== NUEVA FUNCIÓN PARA OBTENER EL CONSEJO DEL DÍA ======
async function obtenerConsejo() {
    try {
        const respuesta = await fetch('https://api.adviceslip.com/advice');
        if (!respuesta.ok) throw new Error('No se pudo obtener el consejo');

        const datos = await respuesta.json();
        document.getElementById('advice').textContent = datos.slip.advice;
    } catch (error) {
        console.error('Error al obtener el consejo:', error);
        document.getElementById('advice').textContent = 'No se pudo cargar el consejo. Inténtalo más tarde.';
    }
}

// Cargar el consejo del día al iniciar la página
window.addEventListener('load', obtenerConsejo);
