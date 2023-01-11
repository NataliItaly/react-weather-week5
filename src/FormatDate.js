import React from "react";

export default function FormatDate(props) {
  function setZero(num) {
    return num < 0 ? "0" + num : num;
  }
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[props.date.getMonth()];
  let day = setZero(props.date.getDate());
  let dayWeek = weekDays[props.date.getDay()];
  let hours = setZero(props.date.getHours());
  let minutes = setZero(props.date.getMinutes());
  let fulDate = `${dayWeek}, ${hours}:${minutes}, ${month},${day}`;
  return <span>{fulDate}</span>;
}
