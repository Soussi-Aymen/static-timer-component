import React, { Component } from "react";
import "./App.css";

const calculetime = time => {
  let hours = Math.floor(time / (60 * 60 * 1000));
  time = time % (60 * 60 * 1000);
  let minutes = Math.floor(time / (60 * 1000));
  time = time % (60 * 1000);
  let seconds = time / 1000;
  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
};

const Timer = props => {
  return (
    <div className="App">
      <h1 className="App-time">{calculetime(props.time)} </h1>
      <div className="App-reference"> Hour Minute Second </div>
    </div>
  );
};

export default Timer;
