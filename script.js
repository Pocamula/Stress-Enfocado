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

// Código para los botones de emociones
const emociones = document.querySelectorAll('.emotions button');
const emotionFeedback = document.getElementById('emotion-feedback');
const emotionHistory = document.getElementById('emotion-history');

emociones.forEach(boton => {
    boton.addEventListener('click', () => {
        const emocion = boton.getAttribute('data-emotion');
        emotionFeedback.textContent = `Te sientes ${emocion}.`;
        
        // Añadir la emoción al historial
        const nuevaEntrada = document.createElement('li');
        nuevaEntrada.textContent = `Te sentiste ${emocion} el ${new Date().toLocaleString()}.`;
        emotionHistory.appendChild(nuevaEntrada);
    });
});

// Código para el ejercicio de respiración
const breathingCircle = document.getElementById('breathing-circle');
const startBreathingButton = document.getElementById('start-breathing');

let breathingInterval;

startBreathingButton.addEventListener('click', () => {
    if (breathingInterval) {
        clearInterval(breathingInterval);
        breathingInterval = null;
        startBreathingButton.textContent = 'Comenzar';
        breathingCircle.style.transform = 'scale(1)';
    } else {
        startBreathingButton.textContent = 'Detener';
        let isInhaling = true;
        breathingInterval = setInterval(() => {
            if (isInhaling) {
                breathingCircle.style.transform = 'scale(1.2)';
                breathingCircle.textContent = 'Inhala';
            } else {
                breathingCircle.style.transform = 'scale(1)';
                breathingCircle.textContent = 'Exhala';
            }
            isInhaling = !isInhaling;
        }, 4000); // Cambia cada 4 segundos
    }
});

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
    
    // Verificar si la tarea ya existe en la lista
    const tareasExistentes = Array.from(listaTareas.getElementsByTagName('li'));
    const tareaRepetida = tareasExistentes.some(item => item.textContent === tarea);

    if (!tareaRepetida) {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = tarea;
        listaTareas.appendChild(nuevaTarea);
    } else {
        alert('Esta tarea ya ha sido añadida.');
    }
}
