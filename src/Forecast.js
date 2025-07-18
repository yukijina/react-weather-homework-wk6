import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Forecast.css';

export default function Forecast({ coordinates }) {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // if the coordinates changes, it triger the api
  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  function formattedDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = days[date.getDay()];
    return day;
  }

  function showForecast(response) {
    setData(response.data.daily);
    setLoaded(true);
  }

  function fetchForecast() {
    const url = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.lon}&lat=${coordinates.lat}&key=${apiKey}`;
    axios.get(url).then(showForecast);
  }

  if (coordinates && !loaded) {
    fetchForecast();
  } else {
    return (
      <article className='Forecast'>
        {data.slice(1).map((weatherData) => {
          return (
            <div key={weatherData.time}>
              <p className='Forecast-day'>{formattedDay(weatherData.time)}</p>

              <img
                src={weatherData.condition.icon_url}
                alt={weatherData.condition.description}
                className='Forecast-img'
              />
              <div className='Forecast-temperature'>
                <p className='Forecast-temperature--max'>
                  {Math.round(weatherData.temperature.maximum)}°
                </p>
                <p className='Forecast-temperature--min'>
                  {Math.round(weatherData.temperature.minimum)}°
                </p>
              </div>
            </div>
          );
        })}
      </article>
    );
  }
}
