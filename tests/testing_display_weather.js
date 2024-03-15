Weather = require('../lib/weather.js')
WeatherClient = require('../lib/weatherClient.js')
WeatherClass = require('../lib/weather.js')
sample = require('./sampledata.js')


const client = new WeatherClient;
const weather = new Weather(client);

weather.displayWeather('Varanasi').then((result) => console.log(result))