const taskText = document.querySelector("#taskInput");
const taskAdd = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
const errorMsg = document.querySelector("#errorMsg");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const renderTask = (task) => {
  const newTask = document.createElement("li");
  if (task.done) {
    newTask.classList.add("done");
  }

  const taskLabel = document.createElement("span");
  taskLabel.textContent = task.text;

  taskLabel.addEventListener("click", () => {
    task.done = !task.done;
    newTask.classList.toggle("done");
    saveTasks();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "წაშლა";

  deleteBtn.addEventListener("click", () => {
    newTask.remove();
    tasks = tasks.filter((t) => t.id !== task.id);
    saveTasks();
  });

  newTask.appendChild(taskLabel);
  newTask.appendChild(deleteBtn);
  taskList.appendChild(newTask);
};

tasks.forEach((task) => renderTask(task));

taskAdd.addEventListener("click", () => {
  const value = taskText.value.trim();

  if (value === "") {
    errorMsg.textContent = "შეიყვანე ტექსტი";
    return;
  }

  if (value.length < 4) {
    errorMsg.textContent = "დაწერე მინიმუმ 4 სიმბოლო";
    return;
  }

  errorMsg.textContent = "";

  const task = { id: Date.now(), text: value, done: false };
  tasks.push(task);
  saveTasks();
  renderTask(task);

  taskText.value = "";
});
