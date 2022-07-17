const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form")
const todoForma = document.querySelector("#todo-form");
const todoLista = document.querySelector("#todo-list");
const quotelist = document.querySelector("#quote") 

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginBtnClick(event) {
  
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const span = document.createElement("span");
  greeting.appendChild(span);
  span.innerText = `WELCOME ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginBtnClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginBtnClick);
} else {
  todoForma.classList.remove(HIDDEN_CLASSNAME);
  todoLista.classList.remove(HIDDEN_CLASSNAME);
  quotelist.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}

function handleLogoutBtnclick(){
  localStorage.removeItem(USERNAME_KEY)
}

document.querySelector("#logout").addEventListener("click", handleLogoutBtnclick);