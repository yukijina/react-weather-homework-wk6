import React from 'react';
import './Forecast.css';

export default function Forecast({ data }) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const slicedData = data.slice(1);

  function formattedDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = days[date.getDay()];
    return day;
  }

  return (
    <article className='Forecast'>
      {slicedData.map((weatherData) => {
        return (
          <div key={weatherData.time}>
            <p className='Forecast-day'>{formattedDay(weatherData.time)}</p>

            <img
              src={weatherData.condition.icon_url}
              alt={weatherData.condition.description}
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
