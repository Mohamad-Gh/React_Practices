import React, { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState(null);

  const generateRGB = () => {
    let color = [
      Math.floor(Math.random() * 226),
      Math.floor(Math.random() * 226),
      Math.floor(Math.random() * 226),
    ];
    setColor(`rgb(${color[0]},${color[1]},${color[2]})`);
  };

  const generateHEX = () => {
    let length = 3 + Math.floor(Math.random() * 4);
    let color = "#";
    for (let i = 0; i < length; i++) {
      let number = Math.floor(Math.random() * 16);
      switch (number) {
        case 10:
          number = "A";
          break;
        case 11:
          number = "B";
          break;
        case 12:
          number = "C";
          break;
        case 13:
          number = "D";
          break;
        case 14:
          number = "E";
          break;
        case 15:
          number = "F";
          break;
        default:
          number = number;
      }
      color += number;
    }
    setColor(color);
  };

  const handleRandomGenerator = () => {
    typeOfColor === "rgb"
      ? generateRGB()
      : typeOfColor === "hex"
      ? generateHEX()
      : null;
  };

  useEffect(() => {
    handleRandomGenerator();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color ? color : "#000",
      }}
    >
      <button
        onClick={() => {
          setTypeOfColor("hex");
          // generateHEX();
        }}
      >
        Create HEX Color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
          // generateRGB();
        }}
      >
        Create RGB Color
      </button>
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
        {<h3>{typeOfColor} Color</h3>}
        <h2>{color}</h2>
      </div>
    </div>
  );
}

export default RandomColor;
