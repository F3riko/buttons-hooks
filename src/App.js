import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LineComponent from "./components/line";
import AlertComponent from "./components/alert";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: "nothing",
    };
  }
  handleClick = (digit) => {
    this.setState({ clicked: digit });
  };

  render() {
    return (
      <div className="col-4 offset-1 center">
        <LineComponent
          onClickFunction={this.handleClick}
          digit1="1"
          digit2="2"
          className1="danger m-3"
          className2="success m-3"
        />
        <LineComponent
          onClickFunction={this.handleClick}
          digit1="2"
          digit2="4"
          className1="danger m-3"
          className2="success m-3"
        />
        <LineComponent
          onClickFunction={this.handleClick}
          digit1="3"
          digit2="6"
          className1="danger m-3"
          className2="success m-3"
        />
        <LineComponent
          onClickFunction={this.handleClick}
          digit1="4"
          digit2="8"
          className1="danger m-3"
          className2="success m-3"
        />
        <LineComponent
          onClickFunction={this.handleClick}
          digit1="5"
          digit2="10"
          className1="danger m-3"
          className2="success m-3"
        />
        <LineComponent
          onClickFunction={this.handleClick}
          digit1="6"
          digit2="12"
          className1="danger m-3"
          className2="success m-3"
        />
        <AlertComponent digit={this.state.clicked} />
      </div>
    );
  }
}

export default App;
