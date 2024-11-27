// script.js
const apiKey = "d0cedafe84800dfcf38b822b718f7a29"; // Replace with your OpenWeather API key
const apiBase = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) {
    alert('Please enter a city name!');
    return;
  }

  const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      displayWeather(data);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Could not fetch weather data. Please try again.");
  }
}

function displayWeather(data) {
  document.getElementById('weather-info').classList.remove('hidden');
  document.getElementById('city-name').textContent = `Weather in ${data.name}`;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('weather').textContent = `Condition: ${data.weather[0].description}`;
  document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
