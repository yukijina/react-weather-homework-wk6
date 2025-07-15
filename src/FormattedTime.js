import React from 'react';

export default function FormattedTime({ timestamp }) {
  const date = new Date(timestamp * 1000);
  console.log(date);
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let unit = hours < 12 ? 'am' : 'pm';

  const day = days[date.getDay()];

  return (
    <span>
      {day} {`${hours}:${minutes} ${unit}`},
    </span>
  );
}
