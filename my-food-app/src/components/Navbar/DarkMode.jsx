import React, { useState } from "react";
import lightPng from "../../assets/website/light-mode-button.png";
import darkPng from "../../assets/website/dark-mode-button.png";

function DarkMode() {
  const [darkModeTheme, setDarkModeTheme] = useState(
    localStorage.getItem("darkModeTheme") || false
  );
  return (
    <button
      className="flex items-center"
      onClick={() => setDarkModeTheme(!darkMode)}
    >
      <img
        className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300"
        src={!darkModeTheme ? lightPng : darkPng}
        alt={!darkModeTheme ? "light-mode" : "dark-mode"}
      />
    </button>
  );
}

export default DarkMode;
