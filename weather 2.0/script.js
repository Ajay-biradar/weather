function getWeather() {
    const apiKey = '7cbc2fda3784ac8ce4f9294388b165fb'; // Replace with your actual API key
    const city = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    // Make sure the user entered a city
    if (city.trim() === '') {
        alert('Please enter a city');
        return;
    }

    // Fetch weather data from the API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Update the weather information on the page
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>

            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Enter the correct city name and Please try again.</p>';
        });
}
