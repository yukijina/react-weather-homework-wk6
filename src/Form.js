import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import Weather from './Weather';
import Forecast from './Forecast';

export default function Form({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [data, setData] = useState({ loaded: false });
  const apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
  const [coordinates, setCoorinates] = useState({});

  function showWeather(response) {
    const dt = response.data;
    setData({
      loaded: true,
      city: dt.city,
      condition: dt.condition.description,
      icon: dt.condition.icon_url,
      country: dt.country,
      temperature: Math.round(dt.temperature.current),
      humidity: dt.temperature.humidity,
      timestamp: dt.time,
      wind: dt.wind.speed,
    });

    setCoorinates({
      lon: dt.coordinates.longitude,
      lat: dt.coordinates.latitude,
    });
  }

  function fetchWeather() {
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeather();
  }

  if (!data.loaded) {
    fetchWeather();
  } else {
    return (
      <main className='Form'>
        <form onSubmit={handleSubmit} className='Form-container'>
          <input
            type='text'
            className='Form-textbox'
            placeholder='Enter a city...'
            autoFocus
            onChange={handleChange}
          />
          <input type='submit' value='Search' className='Form-search' />
        </form>
        <Weather data={data} />
        <Forecast coordinates={coordinates} />
      </main>
    );
  }
}
