import React from "react";
import ReactDOM from "react-dom";

class Countdown extends React.Component {
  state = {
    count_down: 10,
  };

  componentDidMount() {
    this.countDownInterval = setInterval(() => {
      this.setState((prevState) => {
        prevState.count_down--;
        return prevState;
      });

      if (this.state.count_down <= 0) {
        clearInterval(this.countDownInterval);
        this.props.rollRoulette(this.props.getRollResults);
        this.setState((prevState) => {
          prevState.count_down = 10;
          return prevState;
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countDownInterval);
  }

  render() {
    return (
      <p className="count-down">
        NEXT SPIN IN: <span>{this.state.count_down}</span>
      </p>
    );
  }
}

export default Countdown;
