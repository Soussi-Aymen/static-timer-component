import React, { Component } from "react";
import "./App.css";

class Timer extends Component {
  state = {
    time: 63000,
    reference: "Hour Minute Second"
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-time">{this.calculetime(this.state.time)} </h1>
        <div className="App-reference"> {this.state.reference} </div>
      </div>
    );
  }

  calculetime = time => {
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
}

export default Timer;
