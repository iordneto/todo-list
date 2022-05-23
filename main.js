import "./style.css";

/* Variables */
let todoInput = document.querySelector(".todo-input");
let addTodoButton = document.querySelector(".add-todo-btn");
let todoList = document.querySelector(".todo-list");
let doneButtonList = document.querySelectorAll(".todo-done-btn");
let trashButtonList = document.querySelectorAll(".todo-trash-btn");

/* Listeners */
addTodoButton.addEventListener("click", (event) => {
  event.preventDefault();
  addTodo(todoInput.value);
});

/* Functions */
const addTodo = (text) => {
  const newTodoDiv = document.createElement("div");

  const todoItem = document.createElement("li");
  todoItem.innerText = text;
  newTodoDiv.appendChild(todoItem);

  const doneButton = document.createElement("button");
  doneButton.innerText = "done";
  doneButton.classList.add("todo-done-btn");
  doneButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.parentElement.classList.add("done");
  });
  newTodoDiv.appendChild(doneButton);

  const trashButton = document.createElement("button");
  trashButton.innerText = "trash";
  trashButton.classList.add("todo-trash-btn");
  trashButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.parentElement.remove();
  });
  newTodoDiv.appendChild(trashButton);

  todoList.appendChild(newTodoDiv);
};
