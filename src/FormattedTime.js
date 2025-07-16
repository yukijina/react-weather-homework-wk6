import React from 'react';

export default function FormattedTime({ timestamp }) {
  const date = new Date(timestamp * 1000);

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Satday',
    'Sunday',
  ];

  const day = days[date.getDay()];
  const hours = date.getHours();
  const unformattedMinutes = date.getMinutes();
  const minutes =
    unformattedMinutes < 10 ? `0${unformattedMinutes}` : unformattedMinutes;
  const unit = hours < 12 ? 'am' : 'pm';

  return (
    <span>
      {day} {`${hours}:${minutes} ${unit}`},{' '}
    </span>
  );
}
