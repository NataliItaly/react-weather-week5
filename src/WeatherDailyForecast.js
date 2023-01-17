import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherDailyForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherDailyForecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates])

    function handleResponse(response) {
        console.log(response);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
      console.log(forecast);
        return (
          <div className="WeatherDailyForecast">
            <div className="row">
              {forecast.map((dailyForecast, index) => {
                if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  );
                }
              })}

            </div>
          </div>
        );

    }

    else {
        const apiKey = "5c08670149a0b1a4dc7a372a3d5e5333";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let units = "metric";
        const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}