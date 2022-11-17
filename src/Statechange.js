import React, { Component } from "react";

class Statechange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleInc = () => {
    if (this.state.count < 25) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };
  handleDec = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };
  handleRes = () => {
    this.setState({
      count: 0
    });
  };
  render() {
    return (
      <div>
        <h1>SetStateCounterApp</h1>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.handleDec}>Decrement</button>
        <button onClick={this.handleRes}>Reset</button>
      </div>
    );
  }
}
export default Statechange;
