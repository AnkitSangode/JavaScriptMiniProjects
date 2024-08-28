const apiKey = '8b247ad3eb4e9c87ede5c3f51d536a09';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
const input = document.querySelector("#input")
const button = document.querySelector(".btn")


// Example: Fetch weather by city name
function getWeatherByCity(cityName) {
    const url = `${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Handle the data returned by the API
            console.log(data)
            const temp = document.querySelector(".temp").textContent = Math.floor(data.main.temp) + ` °C`;
            const city = document.querySelector(".city").textContent = data.name
            const humidity = document.querySelector(".humidity").textContent = data.main.humidity + `%`
            const windSpeed = document.querySelector(".wind").textContent = data.wind.speed + ` km/hr`
            const weatherIcon = document.querySelector(".weather-icon")

            if (data.weather[0].main == "Clouds"){
              weatherIcon.src = "images/clouds.png";
            }
            else if (data.weather[0].main == "Clear"){
              weatherIcon.src = "images/clear.png"
            }
            else if (data.weather[0].main == "Drizzle"){
              weatherIcon.src = "images/drizzle.png"
            }
            else if (data.weather[0].main == "Haze"){
              weatherIcon.src = "images/mist.png"
            }
            else if (data.weather[0].main == "Rain"){
              weatherIcon.src = "images/rain.png"
            }
            else if (data.weather[0].main == "Snow"){
              weatherIcon.src = "images/snow.png"
            }

            // Process the data as needed
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
 button.addEventListener("click", () => {
   getWeatherByCity(input.value);

 })

