document.addEventListener('DOMContentLoaded', loadTodos);

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';
  if(todos == "") {
    const div = document.createElement('div');
    div.className = 'sbit-padding-16 sbit-center sbit-opacity sbit-animate-zoom';
    div.innerHTML = ` 
      <i class="fa-solid fa-clipboard-list"></i><span> Your to-do list is empty !</span>
    `;
    todoList.appendChild(div);
  }

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'sbit-padding-16 sbit-hover-opacity';
    li.innerHTML = `
      ${todo}
      <button class="sbit-btn sbit-round-xxlarge sbit-small sbit-right sbit-hover-opacity" style="background-color: red; color: white" onclick="if(confirm('You cannot undo this action. Do you want to delete it ?')){removeTodo(${index})}"><i class="fa-solid fa-trash"></i> <span class="sbit-hide-small">Delete</span></button>
    `;
    todoList.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById('todoInput');
  const task = input.value.trim();
  if (!task) return;

  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(task);
  localStorage.setItem('todos', JSON.stringify(todos));

  input.value = '';
  loadTodos();
}

function removeTodo(index) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  loadTodos();
}

function showTodoForm() {
  let TodoShowDiv = document.getElementById("ToDoForm");
  let iconTodoAdd = document.getElementById("mini-add-icon");

  TodoShowDiv.classList.toggle("sbit-hide-small");
  iconTodoAdd.classList.toggle("rotate-45");
}

function changeTheme() {
  const themeHTML = document.getElementById("theme");
  const themeLight = "/theme/default.css";
  const themeDark = "/theme/sbit-theme-dark-grey.css";
  const iconTheme = document.getElementById("icon-theme");
  const btnSwitchTheme = document.getElementById("btn-theme");
  const selectedTheme = btnSwitchTheme.getAttribute("data");
  const nextTheme = selectedTheme == "light" ? "dark" : "light";

  if(selectedTheme == "light") {
    themeHTML.setAttribute("href", themeLight);
    iconTheme.setAttribute("class", "fa fa-moon");
    localStorage.setItem('theme', JSON.stringify(selectedTheme));
  } else {
    themeHTML.setAttribute("href", themeDark);
    iconTheme.setAttribute("class", "fa fa-sun");
    localStorage.setItem('theme', JSON.stringify(selectedTheme));
  }
  btnSwitchTheme.setAttribute("data", nextTheme);
}

function loadTheme() {
  const themeHTML = document.getElementById("theme");
  const themeLight = "/theme/default.css";
  const themeDark = "/theme/sbit-theme-dark-grey.css";
  const iconTheme = document.getElementById("icon-theme");
  const btnSwitchTheme = document.getElementById("btn-theme");
  const themeLS = JSON.parse(localStorage.getItem('theme')) || 'light';
  const nextTheme = themeLS == "light" ? "dark" : "light";
  if(themeLS == "light") {
    themeHTML.setAttribute("href", themeLight);
    iconTheme.setAttribute("class", "fa fa-moon");
    localStorage.setItem('theme', JSON.stringify(themeLS));
  } else {
    themeHTML.setAttribute("href", themeDark);
    iconTheme.setAttribute("class", "fa fa-sun");
    localStorage.setItem('theme', JSON.stringify(themeLS));
  }
  btnSwitchTheme.setAttribute("data", nextTheme);
}
loadTheme();