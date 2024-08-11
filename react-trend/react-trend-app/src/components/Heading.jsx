import React from "react";
import logo from "../../public/images/Trend Market Logo.jpg";
export default function Heading() {
  return (
    <div className="m-1 text-center">
      <img src={logo} width={"200px"} />
      <h2>
        Trend Market{" "}
        <span className="lead">
          <small>(alphavantage)</small>
        </span>
      </h2>
    </div>
  );
}
