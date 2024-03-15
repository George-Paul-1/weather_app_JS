const apiKey = require('../apiKey');

class WeatherClient { 
    fetchForCity (city) { 
        
        return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {

                const weather = {
                    weather: data.weather[0].main,
                    temperature: data.main.temp
                    }; return weather; 
                });
            };
    
    fetchAllForCity (city) { 
        return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {return data})};
    };
    module.exports = WeatherClient;
