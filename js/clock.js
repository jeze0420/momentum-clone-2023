const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// function clearHidden() {
//   clock.classList.remove(HIDDEN_CLASSNAME);
// }

// if (savedUsername === null) {
//   clock.classList.add(HIDDEN_CLASSNAME);
// } else {
//   loginForm.addEventListener("submit", clearHidden);
// }

getClock();
setInterval(getClock, 1000);
