import "./style.css";

/* Variables */
let todoInput = document.querySelector(".todo-input");
let addTodoButton = document.querySelector(".add-todo-btn");
let todoList = document.querySelector(".todo-list");

/* Listeners */
addTodoButton.addEventListener("click", (event) => {
  event.preventDefault();
  addTodo(todoInput.value);
  todoInput.value = "";
});

/* Functions */
const addTodo = (text) => {
  const newTodoDiv = document.createElement("div");
  newTodoDiv.classList.add("todo-item");

  const todoItem = document.createElement("li");
  todoItem.innerText = text;
  newTodoDiv.appendChild(todoItem);

  const doneButton = document.createElement("button");
  doneButton.innerHTML = "<i class='fa-solid fa-check'></i>";
  doneButton.classList.add("todo-done-btn");
  doneButton.addEventListener("click", (event) => {
    event.preventDefault();
    const todo = event.target.parentElement;
    todo.classList.toggle("done");
  });
  newTodoDiv.appendChild(doneButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
  trashButton.classList.add("todo-trash-btn");
  trashButton.addEventListener("click", (event) => {
    event.preventDefault();
    const todo = event.target.parentElement;
    todo.classList.add("removed");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  });
  newTodoDiv.appendChild(trashButton);

  todoList.appendChild(newTodoDiv);
};
