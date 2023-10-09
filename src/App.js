import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function LoginForm() {
  let [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  let [statement, setStatement] = useState("");

  function showWeather(response) {
    setLoaded(true);
    setStatement({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `6a48a550fc04f170639e60d52b8a6bc5`;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search your city.."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(statement.temperature)}°C</li>
          <li>Description: {statement.description}</li>
          <li>Humidity: {statement.humidity}%</li>
          <li>Wind: {statement.wind}km/h</li>
          <li>
            <img src={statement.icon} alt={statement.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}