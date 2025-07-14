import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

export default function Form() {
  const [city, setCity] = useState('New York');
  const [data, setData] = useState({});

  function showWeather(response) {
    const dt = response.data;
    setData({
      city: dt.city,
      condition: dt.condition.description,
      icon: dt.condition.icon_url,
      country: dt.country,
      temperature: dt.temperature.current,
      humidity: dt.temperature.humidity,
      time: dt.time,
      wind: dt.wind.speed,
    });
    console.log(data);
  }

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <input type='text' className='Form-textbox' onChange={handleChange} />
      <input type='submit' value='Search' className='Form-search' />
    </form>
  );
}
