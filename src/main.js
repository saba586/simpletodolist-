const taskText = document.querySelector("#taskInput");
const taskAdd = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
const errorMsg = document.querySelector("#errorMsg");

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

  const newTask = document.createElement("li");
  newTask.textContent = value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "წაშლა";

  deleteBtn.addEventListener("click", () => {
    newTask.remove();
  });

  newTask.appendChild(deleteBtn);
  taskList.appendChild(newTask);

  taskText.value = "";
});