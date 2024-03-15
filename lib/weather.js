class Weather {
    constructor (client) { 
        this.client = client
        this.weatherData = null
        this.city = ""
    }

    async fetchWeatherData(city) {
        this.city = city
        this.weatherData = await this.client.fetchForCity(city)
    };

    getWeather() {
        return `The weather in ${this.city} is: ${this.weatherData.weather} and the temperature is: ${this.weatherData.temperature}`
    };

    async compareTemperature(place1, place2) {
        const weatherData1 = await this.client.fetchForCity(place1);
        const weatherData2 = await this.client.fetchForCity(place2);
        
        if (weatherData1.temperature > weatherData2.temperature){
            return `${place1} is ${weatherData1.temperature} degrees,\n`+
            `${place2} is ${weatherData2.temperature} degrees,\n`+
            `They have a ${(weatherData1.temperature-weatherData2.temperature)} degrees difference`
            }
        
        else {
            return `${place1} is ${weatherData1.temperature} degrees,\n`+
            `${place2} is ${weatherData2.temperature} degrees,\n`+
            `They have a ${(weatherData2.temperature-weatherData1.temperature)} degrees difference`
            };
    };

    async displayWeather(city) {
        const data = await this.client.fetchAllForCity(city);
        return `City: ${data.name}\n`+
                `Weather: ${data.weather[0].main}\n`+
                `Temperature: ${data.main.temp}\n`+
                `Feels Like: ${data.main.feels_like}\n`+
                `Humidity: ${data.main.humidity}%`
    };

}

module.exports = Weather;


