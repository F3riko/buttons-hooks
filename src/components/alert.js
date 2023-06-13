import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class AlertComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { digit } = this.props;
    return (
      <div className="alert alert-info" role="alert">
        You've clicked {digit}
      </div>
    );
  }
}

export default AlertComponent;
