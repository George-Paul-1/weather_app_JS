Weather = require('../lib/weather.js')
WeatherClient = require('../lib/weatherClient.js')
WeatherClass = require('../lib/weather.js')
sample = require('./sampledata.js')

describe('testing weather class', () => {


    it('initialises with client', () => {
        weatherclient = new WeatherClient
        weatherclass = new Weather(weatherclient);
        expect(weatherclass.client).toBe(weatherclient);
    });
    
    it('Fetches the weather for Mumbai', async () => {
        const mockClient = {
            fetchForCity: jest.fn(), // This is a jest mock function
        };
        mockClient.fetchForCity.mockResolvedValueOnce({ weather: 'Smoke', temperature: 28.99 });
        
        const weatherclass = new WeatherClass(mockClient);
        await weatherclass.fetchWeatherData('mumbai')
        
        expect(weatherclass.weatherData).toEqual({ weather: 'Smoke', temperature: 28.99 })
        expect(mockClient.fetchForCity).toHaveBeenCalledWith('mumbai')
    });

    it('returns data in a readable format', async () => {
        const mockClient = {
            fetchForCity: jest.fn(), // This is a jest mock function
        };
        mockClient.fetchForCity.mockResolvedValueOnce({ weather: 'rain', temperature: 14.00 });
        
        const weatherclass = new WeatherClass(mockClient);
        await weatherclass.fetchWeatherData('london')
        expect(weatherclass.getWeather()).toEqual('The weather in london is: rain and the temperature is: 14')
    });

    it('compares the temperature of incoming city temp with current temp and displays the comparison', async () => {
        mockClient = {
            fetchForCity: jest.fn(),
        };
        mockClient.fetchForCity.mockResolvedValueOnce( { weather: 'rain', temperature: 14.00} );
        mockClient.fetchForCity.mockResolvedValueOnce( { weather: 'sun', temperature: 10.00} );
        const weatherclass = new WeatherClass(mockClient);
        const res = await weatherclass.compareTemperature('place1', 'place2');
        expect(res).toEqual('place1 is 14 degrees,\n'+
                            'place2 is 10 degrees,\n'+
                            'They have a 4 degrees difference')
        });

        it('does not give negative number for temp diff', async () => {
            mockClient = {
                fetchForCity: jest.fn(),
            };
            mockClient.fetchForCity.mockResolvedValueOnce( { weather: 'rain', temperature: 10.00} );
            mockClient.fetchForCity.mockResolvedValueOnce( { weather: 'sun', temperature: 14.00} );
            const weatherclass = new WeatherClass(mockClient);
            const res = await weatherclass.compareTemperature('place1', 'place2');
            expect(res).toEqual('place1 is 10 degrees,\n'+
                                'place2 is 14 degrees,\n'+
                                'They have a 4 degrees difference')
            });

        it('fetches data and displays it nicely when called with displayWeather()', async () => {
            mockClient = {
                fetchAllForCity: jest.fn(),
            };
            mockClient.fetchAllForCity.mockResolvedValueOnce(sample)
            const weatherclass = new WeatherClass(mockClient);
            const res = await weatherclass.displayWeather('london');
            expect(res).toEqual(
                'City: London\n'+
                'Weather: Clouds\n'+
                'Temperature: 14.39\n'+
                'Feels Like: 13.95\n'+
                'Humidity: 79%'
            );
        });
    });