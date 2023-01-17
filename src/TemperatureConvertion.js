import React, { useState } from "react";

export default function TemperatureConvertion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <p className="d-flex align-items-start">
          <span className="temperature">{Math.round(props.celsius)}</span>
          <a href="/" onClick={convertToCelsius} className="temp-btn active">
            °C
          </a>
          <pre> / </pre>
          <a href="/" onClick={convertToFarenheit} className="temp-btn">
            °F
          </a>
        </p>
      </div>
    );
  } else {
    let farenheit = Math.round(props.celsius * 1.8 + 32);
    console.log(props.celsius);
    return (
      <div className="WeatherTemperature">
        <p className="d-flex align-items-start">
          <span className="temperature">{farenheit}</span>
          <a href="/" onClick={convertToCelsius} className="temp-btn">
            °C
          </a>
          <span> / </span>
          <a href="/" onClick={convertToFarenheit} className="temp-btn active">
            °F
          </a>
        </p>
      </div>
    );
  }
}
