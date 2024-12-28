const API_key = "cf91331d360ff0e13c887ed83a83b2e6";

const lat = 41;
const lon = 60;

const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

salom = document.querySelector(".salom");
degree = document.querySelector(".degree");
weatherInfo = document.querySelector(".weather-info");
coordinates = document.querySelector(".coordinates");

fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let { name, coord, main, weather } = data;

    salom.innerHTML = name;
    degree.innerHTML = Math.floor(main.temp - 273) + "C";
    weatherInfo.innerHTML = weather[0].description;
    coordinates.innerHTML = `Kordinatalari: ${coord.lat}:${coord.lon}`;

    console.log(name);
    console.log(coord);
    console.log(main);
    console.log(weather);
  });
