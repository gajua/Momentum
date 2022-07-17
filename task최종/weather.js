const API_KEY = "b40d860cc44eaf53e19928214a29fcfd";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) => response.json()).then((data) =>{
    const city = document.querySelector("#weather span:first-child")
    const weather = document.querySelector("#weather span:last-child")
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
  })
}
function onGeoError(){
  alert("can't find  you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)