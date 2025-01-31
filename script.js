// En tu archivo script.js
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
