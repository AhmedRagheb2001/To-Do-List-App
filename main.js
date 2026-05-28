const TaskNameBox = document.getElementById("TaskNameBox");
const TaskDescriptionBox = document.getElementById("TaskDescriptionBox");
const container = document.getElementById("container");
const ul = document.querySelector("ul");

let Tasks = [];

function addTask() {
  const li = document.createElement("li");

  let task = new Task(TaskNameBox.value, TaskDescriptionBox.value);
  Tasks.push(task);

  li.textContent = task.getName();

  ul.appendChild(li); // ✅ correct
}

document.getElementById("addTask").addEventListener("click", addTask);