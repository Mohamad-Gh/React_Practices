import React, { useState } from "react";

function RandomColor() {
  const [rgb, setRgb] = useState(false);
  const [hex, setHex] = useState(false);
  const [color, setColor] = useState(null);
  const generateRGB = () => {
    let color = [
      Math.floor(Math.random() * 226),
      Math.floor(Math.random() * 226),
      Math.floor(Math.random() * 226),
    ];
    setColor(`rgb(${color[0]},${color[1]},${color[2]})`);
  };
  const generateHEX = () => {};

  const handleRandomGenerator = () => {
    rgb ? generateRGB() : hex ? generateHEX() : null;
  };

  return (
    <div
      style={{
        // width: "100vw",
        height: "100vh",
        background: color ? color : "#000",
      }}
    >
      <button onClick={() => setHex(true)}>Create HEX Color</button>
      <button onClick={() => setRgb(true)}>Create RGB Color</button>
      <button onClick={handleRandomGenerator}>Generate Random Color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>typeofColor</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
}

export default RandomColor;
