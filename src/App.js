import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LineComponent from "./components/line";
import AlertComponent from "./components/alert";

class App extends Component {
  constructor() {
    super()
    this.state = {
      clicked: "nothing"
    }
  }
  handleClick = (digit) => {
    this.setState({clicked: digit})
  };

  render() {
    return (
      <>
      <LineComponent
        onClickFunction={this.handleClick}
        digit1="1"
        digit2="2"
        className1="danger"
        className2="success"
      />
      <LineComponent
        onClickFunction={this.handleClick}
        digit1="2"
        digit2="4"
        className1="danger"
        className2="success"
      />
      <LineComponent
        onClickFunction={this.handleClick}
        digit1="3"
        digit2="6"
        className1="danger"
        className2="success"
      />
      <LineComponent
        onClickFunction={this.handleClick}
        digit1="4"
        digit2="8"
        className1="danger"
        className2="success"
      />
      <LineComponent
        onClickFunction={this.handleClick}
        digit1="5"
        digit2="10"
        className1="danger"
        className2="success"
      />
      <LineComponent
        onClickFunction={this.handleClick}
        digit1="6"
        digit2="12"
        className1="danger"
        className2="success"
      />
      <AlertComponent digit={this.state.clicked}/>
      </>
    );
  }
}

export default App;
