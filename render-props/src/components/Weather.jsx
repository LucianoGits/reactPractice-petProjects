import { useState, useEffect } from 'react';
const REACT_APP_API_KEY = '96492d899c94841f0ca59cf415a73522';

function Weather({ location, render }) {
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(false);
     const [temperature, setTemperature] = useState(0);
     const [conditions, setConditions] = useState([]);
     const [icon, setIcon] = useState('');
     const [place, setPlace] = useState('');

     const fetchWeather = location => {
          setIsLoading(true);
          fetch(
               `http://api.weatherstack.com/current?access_key=${REACT_APP_API_KEY}&query=${location}`
          )
               .then(res => res.json())
               .then(({ current, location }) => {
                    const { temperature, weather_descriptions, weather_icons } =
                         current;
                    const { name, country } = location;

                    setConditions(weather_descriptions);
                    setTemperature(temperature);
                    setIcon(weather_icons[0]);
                    setPlace(`${name}, ${country}`);
                    setError(false);
               })
               .catch(() => setError(false))
               .finally(() => setIsLoading(false));
     };

     useEffect(() => {
          if (location) {
               fetchWeather(location);
          }
     }, [location]);

     return render({ error, isLoading, temperature, conditions, icon, place });
}

export default Weather;
