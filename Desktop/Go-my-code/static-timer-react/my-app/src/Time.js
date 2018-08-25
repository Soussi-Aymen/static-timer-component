import React, { Component } from "react";
import Timer from "./App";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }
  start = () => {
    if (this.state.interval) {
      return;
    }

    const inter = setInterval(() => {
      this.setState({ time: this.state.time + 1000 });
    }, 1000);

    this.setState({
      interval: inter
    });
  };
  reset = () => {
    clearInterval(this.state.interval);

    this.setState({ time: 0 });
    this.setState({
      interval: undefined
    });
    if (!this.state.interval) {
      return;
    }
  };

  render() {
    return (
      <div>
        <Timer time={this.state.time} />
        <div className=" button-list">
          <button className="Start" onClick={this.start}>
            Start
          </button>
          <button className="Reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Time;
