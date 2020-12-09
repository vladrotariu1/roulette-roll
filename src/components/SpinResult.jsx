import React from "react";
import ReactDOM from "react-dom";

class SpinResult extends React.Component {
  render() {
    switch (this.props.color) {
      case "b":
        return (
          <p style={{ color: "rgb(54, 54, 54)" }} className="spin-result">
            BLACK
          </p>
        );
        break;
      case "r":
        return (
          <p style={{ color: "rgb(240, 40, 40)" }} className="spin-result">
            RED
          </p>
        );
        break;
      case "g":
        return (
          <p style={{ color: "rgb(20, 214, 85)" }} className="spin-result">
            GREEN
          </p>
        );
        break;
      default:
        return null;
    }
  }
}

export default SpinResult;
