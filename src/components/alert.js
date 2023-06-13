import React from "react";

const AlertComponent = ({ digit }) => {
  return (
    <div className="alert alert-info text-center" role="alert">
      You've clicked {digit}
    </div>
  );
};

export default AlertComponent;