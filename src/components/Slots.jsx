import React from "react";
import ReactDOM from "react-dom";

import Countdown from "./Countdown";

class Slots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRollingState = (value) => {
    this.setState((prevState) => {
      prevState.rolling = value;
      return prevState;
    });
  };

  render() {
    return (
      <div>
        {!this.props.rolling ? (
          <Countdown
            rollRoulette={this.props.rollRoulette}
            getRollResults={this.props.getRollResults}
          />
        ) : (
          <p className="count-down">SPINNING</p>
        )}
        <div id="roulette" className="slots-container"></div>
      </div>
    );
  }
}

export default Slots;
