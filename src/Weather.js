import React from 'react';
import './Weather.css';
import FormattedTime from './FormattedTime';

export default function Weather({ data }) {
  console.log(data);

  function titleCase(text) {
    return text.replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }

  return (
    <div className='Weather'>
      <article>
        <h2 className='Weather-heading--2'>{data.city}</h2>
        <p>
          <FormattedTime timestamp={data.timestamp} />{' '}
          <span>{titleCase(data.condition)}</span>
        </p>
        <p>
          Humidty: <span className='Weather-unit'>{data.humidity}%</span>, Wind:{' '}
          <span className='Weather-unit'>{data.wind}km/h</span>
        </p>
      </article>
      <article className='Weather-col--right'>
        <img src={data.icon} alt={data.condition} />
        <p className='Weather-temperature'>
          {data.temperature}
          <span className='Weather-temperature-unit'>°C</span>
        </p>
      </article>
    </div>
  );
}
