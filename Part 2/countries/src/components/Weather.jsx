import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({ selectedCountry, filterCountry }) => {
  const apiKey = import.meta.env.VITE_WEATHER_KEY;
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (selectedCountry) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.capital}&appid=${apiKey}`
        )
        .then((response) => {
          setWeather(response.data);
        });
    } else if (filterCountry) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${filterCountry[0].capital}&appid=${apiKey}`
        )
        .then((response) => {
          setWeather(response.data);
        });
    }
  }, [selectedCountry, filterCountry, apiKey]);

  if (weather.length === 0) {
    return <div>Weather data not available</div>;
  }
  return (
    <div>
      {selectedCountry ? (
        <div>
          <h3>Weather in {selectedCountry.capital}</h3>
          <div>temperature: {weather.main.temp} Celsius</div>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
            width="100px"
          />
          <div>wind: {weather.wind.speed} m/s</div>
        </div>
      ) : (
        <div>
          <h3>Weather in {filterCountry[0].capital}</h3>
          <div>temperature: {weather.main.temp} Celsius</div>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
            width="100px"
          />
          <div>wind: {weather.wind.speed} m/s</div>
        </div>
      )}
    </div>
  );
};

export default Weather;
