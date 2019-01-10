import React from 'react';
import './WeatherData.css'

const WeatherData = props => {

  let card = '';

  if (props.description.includes("clear")) {
    card = "weathercardClear";
  } else if (props.description.includes("clouds")) {
    card = "weathercardClouds";
  } else if (props.description.includes("rain") || props.description.includes("drizzle")) {
    card = "weathercardRain";
  } else if (props.description.includes("snow")) {
    card = "weathercardSnow";
  } else if (props.description.includes("mist") || props.description.includes("haze")) {
    card = "weathercardMist"
  }

  return (
    <div className={`weathercard ${card}`}>
      <h1>{props.city}</h1>
      <h3>{props.temperature}</h3>
      <h3>{props.description}</h3>
    </div>
  );
}

export default WeatherData;