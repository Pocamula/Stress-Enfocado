// Registro de usuarios (simulado con LocalStorage)
const registerForm = document.getElementById("register-form");
const userFeedback = document.getElementById("user-feedback");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!username || !email) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);

  userFeedback.textContent = `¡Bienvenido, ${username}!`;
  alert("Registro exitoso. ¡Gracias por unirte a MindSync!");
});

// Registro de emociones con historial
const emotionButtons = document.querySelectorAll("#emotion-tracker button");
const emotionFeedback = document.getElementById("emotion-feedback");
const emotionHistory = document.getElementById("emotion-history");

let emotions = JSON.parse(localStorage.getItem("emotions")) || [];

const updateEmotionHistory = () => {
  emotionHistory.innerHTML = emotions
    .map((emotion) => `<li>${emotion.date}: ${emotion.emotion}</li>`)
    .join("");
};

emotionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const emotion = button.getAttribute("data-emotion");
    emotionFeedback.textContent = `Has seleccionado: ${emotion}. ¡Gracias por compartir!`;

    emotions.push({ emotion, date: new Date().toLocaleString() });
    localStorage.setItem("emotions", JSON.stringify(emotions));

    updateEmotionHistory();
  });
});

updateEmotionHistory();

// Ejercicio de respiración
const breathingCircle = document.querySelector(".breathing-circle");
const startButton = document.getElementById("start-breathing");

startButton.addEventListener("click", () => {
  breathingCircle.style.animationPlayState = "running";
  startButton.textContent = "En progreso...";
  setTimeout(() => {
    breathingCircle.style.animationPlayState = "paused";
    startButton.textContent = "Comenzar";
    alert("¡Buen trabajo! Has completado el ejercicio de respiración.");
  }, 16000); // 16 segundos (4 segundos por ciclo x 4 ciclos)
});

// Tareas personalizadas
const addTaskForm = document.getElementById("add-task-form");
const tasksList = document.getElementById("tasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const updateTasks = () => {
  tasksList.innerHTML = tasks
    .map(
      (task, index) => `
    <li>
      ${task}
      <button class="delete-task" data-index="${index}">Eliminar</button>
    </li>
  `
    )
    .join("");

  document.querySelectorAll(".delete-task").forEach((button) => {
    button.addEventListener("click", (e) => {
      deleteTask(e.target.dataset.index);
    });
  });
};

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = document.getElementById("new-task").value.trim();

  if (!newTask) {
    alert("Por favor, ingresa una tarea.");
    return;
  }

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateTasks();
  document.getElementById("new-task").value = "";
});

const deleteTask = (index) => {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateTasks();
};

updateTasks();

// Consejo del día (persistente en LocalStorage)
const tipElement = document.getElementById("tip");
const today = new Date().toLocaleDateString();
const savedTip = localStorage.getItem("dailyTip");
const savedDate = localStorage.getItem("tipDate");

const fetchNewTip = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const tip = data.slip.advice;
      localStorage.setItem("dailyTip", tip);
      localStorage.setItem("tipDate", today);
      tipElement.textContent = tip;
    })
    .catch(() => {
      tipElement.textContent = "Hoy es un buen día para respirar profundamente.";
    });
};

// Mostrar consejo almacenado o generar uno nuevo
if (savedDate === today && savedTip) {
  tipElement.textContent = savedTip;
} else {
  fetchNewTip();
}

// Notificaciones push (simuladas con alertas)
setTimeout(() => {
  alert("¡Recuerda tomar un descanso y respirar profundamente!");
}, 60000); // Notificación después de 1 minuto
