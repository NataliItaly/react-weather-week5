import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
// import weatherIcon from "https://www.flaticon.com/free-icon/sun_4814268?term=forecast&page=1&position=24&origin=tag&related_id=4814268";

export default function Weather(props) {
  const [weather, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function searchCity() {
    const apiKey = "5c08670149a0b1a4dc7a372a3d5e5333";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                defaultValue="Enter your city"
                className="search"
                onChange={handleCityChange}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary submit"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfo info={weather} />
      </div>
    );
  } else {
    searchCity();
    return "Loading";
  }
}
