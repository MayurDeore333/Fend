import React from "react";
import ReactDOM from "react-dom";
import "./Loader.css";
const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
       <div className="loader">
      <div
        className="spinner-border text-light"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
     
      </div>
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="wrapper">
       <div className="loader">
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        
      </div>
      </div>
    </div>
  );
};

export default Loader;
