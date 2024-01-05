function onGeoSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} ${data.main.temp}℃`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("I can't find you, so we can't get weather information");
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);
