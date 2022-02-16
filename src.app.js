function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "15dc396ba08536ce424f26fbc76e79a9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
