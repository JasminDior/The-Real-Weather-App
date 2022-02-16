function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let descriptionElement = document.querySelector("#description");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  description.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "15dc396ba08536ce424f26fbc76e79a9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
