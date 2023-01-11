import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConvertion from "./TemperatureConvertion";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2 className="text-capitalize">{props.info.city}</h2>
      <ul>
        <li>
          <FormatDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <WeatherIcon code={props.info.icon} />
          </div>
          <div className="col-6">
            <TemperatureConvertion celsius={props.info.temperature} />
          </div>
        </div>
        <div className="col-6 text-left">
          <ul>
            <li>Pressure {props.info.pressure} hPa</li>
            <li>Humidity {props.info.humidity}%</li>
            <li>Wind {props.info.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
