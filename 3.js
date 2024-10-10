// Function to fetch weather data for user-inputted location
function fetchWeather() {
    const locationInput = document.getElementById('location-input');
    const location = locationInput.value.trim();
    
    // For simplicity, using static coordinates (London in this case)
    const lat = 51.509865; // Latitude for London
    const lon = -0.118092; // Longitude for London

    const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&current_weather=true';
  
    fetch(weatherUrl)
      .then(handleResponse)
      .then(displayWeather)
      .catch(handleError);
}

// Handle fetch response
function handleResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

// Handle errors
function handleError(error) {
    alert('Error fetching weather data: ' + error.message);
}

// Display the weather information
function displayWeather(data) {
    const weather = data.current_weather;
    const weatherInfo = '<div class="info-box">' +
        '<h2>Weather Information</h2>' +
        '<p>Temperature: ' + weather.temperature + '°C</p>' +
        '<p>Weather Code: ' + weather.weathercode + '</p>' +
        '<p>Wind Speed: ' + weather.windspeed + ' km/h</p>' +
        '</div>';
    document.getElementById('weather-info').innerHTML = weatherInfo;
}
