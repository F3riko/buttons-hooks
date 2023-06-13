import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      className: `btn btn-outline-${props.className}`,
    };
  }

  handleClick = () => {
    const { digit, onClickFunction, className } = this.props;
    onClickFunction(digit);
    this.state.clicked === false
      ? this.setState({
          clicked: true,
          className: `btn btn-outline-${className}`,
        })
      : this.setState({ clicked: false, className: `btn btn-${className}` });
  };

  render() {
    const { digit } = this.props;
    const { className } = this.state;
    return (
      <button onClick={this.handleClick} className={className}>
        {digit}
      </button>
    );
  }
}
