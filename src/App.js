import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LineComponent from "./components/line";
import AlertComponent from "./components/alert";

const App = () => {
  const [clicked, setClicked] = React.useState("nothing");

  const handleClick = (digit) => {
    setClicked(digit);
  };

  return (
    <div className="col-4 offset-1 center">
      <LineComponent
        onClickFunction={handleClick}
        digit1="1"
        digit2="2"
        className1="danger"
        className2="success"
      />
      <LineComponent
        onClickFunction={handleClick}
        digit1="2"
        digit2="4"
        className1="danger"
        className2="success"
      />
      <LineComponent
        onClickFunction={handleClick}
        digit1="3"
        digit2="6"
        className1="danger"
        className2="success"
      />
      <LineComponent
        onClickFunction={handleClick}
        digit1="4"
        digit2="8"
        className1="danger"
        className2="success"
      />
      <LineComponent
        onClickFunction={handleClick}
        digit1="5"
        digit2="10"
        className1="danger"
        className2="success"
      />
      <LineComponent
        onClickFunction={handleClick}
        digit1="6"
        digit2="12"
        className1="danger"
        className2="success"
      />
      <AlertComponent digit={clicked} />
    </div>
  );
};

export default App;
