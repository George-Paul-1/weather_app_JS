const apiKey = require('../apiKey');
const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
let weatherData = null;
const fetchData = async () => {
    let response = await fetch(apiUrl);
    weatherData = await response.json()
    console.log(weatherData.weather[0].main)
    console.log(weatherData.main.temp)
    console.log(weatherData)
}
fetchData();

// The above code is just part of an initial test of the API and doesn't do much 
// for the overall program other
// than serve as a reference.