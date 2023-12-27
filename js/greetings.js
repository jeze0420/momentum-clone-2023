const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

const textHello1 = textHello();

function textHello() {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 6) {
    return "GoodNight";
  } else if (hours < 12) {
    return "GoodMoring";
  } else if (hours === 12) {
    return "GoodNoon";
  } else if (hours < 18) {
    return "GoodAfternoon";
  } else if (hours < 22) {
    return "GoodEvening";
  } else if (hours < 24) {
    return "GoodNight";
  }
}

function paintGreetings(username) {
  greeting.innerText = `${textHello1}, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function removeUsername() {
//   localStorage.removeItem(USERNAME_KEY);
// }

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  // window.addEventListener("unload", removeUsername);
}
