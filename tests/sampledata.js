const sample = {
    coord: { lon: -0.1257, lat: 51.5085 },
    weather: [
        {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d'
        }
    ],
    base: 'stations',
    main: {
        temp: 14.39,
        feels_like: 13.95,
        temp_min: 12.29,
        temp_max: 16.11,
        pressure: 1004,
        humidity: 79
    },
    visibility: 10000,
    wind: { speed: 7.2, deg: 240 },
    clouds: { all: 40 },
    dt: 1710511239,
    sys: {
        type: 2,
        id: 2075535,
        country: 'GB',
        sunrise: 1710483236,
        sunset: 1710525890
    },
    timezone: 0,
    id: 2643743,
    name: 'London',
    cod: 200
    }

module.exports = sample;