const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const city = userInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f144871bb3db7f028f0744f2fb1379b6&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.cod === 200) {
                alert(`Weather in ${city}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
            } else {
                alert("City not found ❌");
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
});