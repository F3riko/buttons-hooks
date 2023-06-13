import React from "react";
import LineComponent from "./components/line";
import AlertComponent from "./components/alert";

const App = () => {
  const [clicked, setClicked] = React.useState("nothing");

  const handleClick = (digit) => {
    setClicked(digit);
  };

  const lineProps = {
    onClickFunction: handleClick,
    digit1: "1",
    digit2: "2",
    className1: "danger",
    className2: "success",
  };

  return (
    <div className="col-4 offset-1 center">
      <LineComponent {...lineProps} />
      <LineComponent {...lineProps} digit1="2" digit2="4" />
      <LineComponent {...lineProps} digit1="3" digit2="6" />
      <LineComponent {...lineProps} digit1="4" digit2="8" />
      <LineComponent {...lineProps} digit1="5" digit2="10" />
      <LineComponent {...lineProps} digit1="6" digit2="12" />
      <AlertComponent digit={clicked} />
    </div>
  );
};

export default App;
