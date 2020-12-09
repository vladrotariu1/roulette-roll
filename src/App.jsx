import React from "react";
import ReactDOM from "react-dom";

import Slots from "./components/Slots";
import SpinResult from "./components/SpinResult";

class App extends React.Component {
  state = {
    roulette: this.props.roulette,
    rolling: false,
    result: "b",
  };

  getRollResults = () => {
    const result = this.state.roulette.get_spin_result();
    this.setState((prevState) => {
      prevState.rolling = false;
      prevState.result = result;
      return prevState;
    });
  };

  rollRoulette = () => {
    this.state.roulette.roll(this.getRollResults);
    this.setState((prevState) => {
      prevState.rolling = true;
      return prevState;
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Slots
          rollRoulette={this.rollRoulette}
          getRollResults={this.getRollResults}
          rolling={this.state.rolling}
        />
        <SpinResult color={this.state.result} />
      </div>
    );
  }
}

export default App;
