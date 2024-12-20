const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const city = userInput.value;

    // Fetch weather data using an API like OpenWeatherMap
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f144871bb3db7f028f0744f2fb1379b6`)
        .then(response => response.json())
        .then(data => {
            // Display the weather information
            console.log(data); // You can customize the display as needed
            alert(`Weather in ${city}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
});