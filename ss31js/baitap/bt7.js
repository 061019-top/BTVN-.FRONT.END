let todoList = [
  { id: 1, task: "Hit the gym", completed: false },
  { id: 2, task: "Pay bills", completed: true },
  { id: 3, task: "Meet George", completed: false },
  { id: 4, task: "Buy eggs", completed: false },
  { id: 5, task: "Read a book", completed: false },
  { id: 6, task: "Organize office", completed: false },
];

function renderList() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  todoList.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add(item.completed ? "completed" : "");
    li.innerHTML = `
            <span onclick="toggleComplete(${item.id})">${item.task}</span>
            <button class="delete-btn" onclick="deleteTask(${item.id})">×</button>
        `;
    taskList.appendChild(li);
  });
}

function addTask() {
  let taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim() === "") return;

  let newTask = {
    id: todoList.length + 1,
    task: taskInput.value,
    completed: false,
  };

  todoList.push(newTask);
  taskInput.value = "";
  renderList();
}

function toggleComplete(id) {
  let task = todoList.find((item) => item.id === id);
  if (task) task.completed = !task.completed;
  renderList();
}

function deleteTask(id) {
  todoList = todoList.filter((item) => item.id !== id);
  renderList();
}

renderList();
