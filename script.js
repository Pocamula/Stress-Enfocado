// Lista de tareas sugeridas para reducir el estrés
const stressReliefTasks = [
    "Salir a caminar 10 minutos al aire libre",
    "Hacer respiraciones profundas durante 2 minutos",
    "Escuchar música relajante",
    "Tomar una taza de té o café tranquilamente",
    "Escribir en un diario lo que sientes",
    "Practicar una postura de yoga",
    "Leer un capítulo de un libro",
    "Dibujar o colorear algo",
    "Meditar durante 5 minutos",
    "Desconectarte de redes sociales por 30 minutos"
];

// Elementos del DOM
const suggestionButton = document.getElementById("get-suggestion");
const suggestionDisplay = document.getElementById("suggestion");
const taskList = document.getElementById("tasks");

// Función para mostrar una sugerencia aleatoria
function suggestTask() {
    const randomIndex = Math.floor(Math.random() * stressReliefTasks.length);
    suggestionDisplay.textContent = stressReliefTasks[randomIndex];
}

// Función para agregar la sugerencia como tarea
function addSuggestedTask() {
    if (suggestionDisplay.textContent !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = suggestionDisplay.textContent;
        
        // Agregar un botón para eliminar la tarea
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = () => taskList.removeChild(taskItem);
        
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        
        // Limpiar la sugerencia después de agregarla
        suggestionDisplay.textContent = "";
    }
}

// Eventos
suggestionButton.addEventListener("click", suggestTask);
document.getElementById("add-suggested-task").addEventListener("click", addSuggestedTask);
