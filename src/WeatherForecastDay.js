import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props) {
    function setDayOfWeek() {
        const weekDays = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let date = new Date(props.data.dt * 1000);
        let day = weekDays[date.getDay()];
        return day;
    }

    return (
      <div>
        <div className="DailyForecastDay">{setDayOfWeek()}</div>
        <div className="DailyWeatherIcon">
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
        </div>
        <div className="WeatherDailyTemperature">
          <span className="DailyMaxTemperature font-weight-bold">
            {Math.round(props.data.temp.max)}°C
          </span>
          <span className="DailyMinTemperature font-weight-bold">
            {Math.round(props.data.temp.min)}°C
          </span>
        </div>
      </div>
    );
}