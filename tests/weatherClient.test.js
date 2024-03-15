const jestFetchMock = require("jest-fetch-mock");
const apiKey = require('../apiKey');
jestFetchMock.enableMocks();
const WeatherClient = require('../lib/weatherClient');
const sample = require('./sampledata.js')


describe('testing weatherClient class', () => {
    
    beforeEach(() => {
        fetch.resetMocks();
    });
    
    it('fetches fake weather for a fake London', async () => {
        weatherclient = new WeatherClient;
        fetch.mockResponseOnce(JSON.stringify({weather:[{
        main: 'Clouds',
        }], //Here we are mocking a portion of the data that comes
            //from our API request. 
        main: {
            temp: 13.00,
        }}
    ));
        const res = await weatherclient.fetchForCity('London')
        // The code below checks the values are correct
        expect(res.weather).toEqual('Clouds');
        expect(res.temperature).toEqual(13.00);
        // The code below checks that fetch was called once and the correct URL was used
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=${apiKey}`)
    });

    // END OF FIRST TEST

    it('fetches all data and return Json with fetchAllForCity', async () => {
        weatherclient = new WeatherClient;
        
        fetch.mockResponseOnce(JSON.stringify(sample));
    
    // ^^ All the data we want from the request ^^

        const res = await weatherclient.fetchAllForCity('London')
        
    // The code below checks the values are correct
            
        expect(res.weather[0].main).toEqual('Clouds');
        expect(res.main.temp).toEqual(14.39);
        expect(res.main.humidity).toEqual(79);
        expect(res.main.feels_like).toEqual(13.95);
        expect(res.visibility).toEqual(10000);
        
        // The code below checks that fetch was called once and the correct URL was used
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=${apiKey}`)
    
    });

    // END OF SECOND TEST

});