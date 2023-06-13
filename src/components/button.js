import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ButtonComponent = ({ digit, onClickFunction, className }) => {
  const buttonClassName = `btn btn-outline-${className} m-3`

  const handleClick = () => {
    onClickFunction(digit);
  };

  return (
    <button onClick={handleClick} className={buttonClassName}>
      {digit}
    </button>
  );
};

export default ButtonComponent;
