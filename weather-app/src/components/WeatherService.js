const weatherData = [
     {
          city: 'New York',
          minTemp: 4,
          maxTemp: 8,
          current: 50,
          conditions: 'Cloudy with a chance of rain',
     },
     {
          city: 'Los Angeles',
          minTemp: 11,
          maxTemp: 17,
          current: 15,
          conditions: 'Clear Sky',
     },
];

export default city =>
     Promise.resolve(
          city
               ? weatherData.filter(c => c.city === city)[0]
               : Promise.resolve(weatherData[0])
     );
