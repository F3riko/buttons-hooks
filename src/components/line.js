import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ButtonComponent from "./button";

const LineComponent = ({ digit1, digit2, onClickFunction, className1, className2 }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-between btn-group">
            <ButtonComponent digit={digit1} onClickFunction={onClickFunction} className={className1} />
            <ButtonComponent digit={digit2} onClickFunction={onClickFunction} className={className2} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default LineComponent;
