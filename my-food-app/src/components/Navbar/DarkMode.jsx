import React, { useEffect, useState } from "react";
import lightPng from "../../assets/website/light-mode-button.png";
import darkPng from "../../assets/website/dark-mode-button.png";

function DarkMode() {
  const [darkModeTheme, setDarkModeTheme] = useState(
    localStorage.getItem("darkModeTheme") || false
  );

  useEffect(() => {
    const element = document.documentElement;
    if (darkModeTheme) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("darkModeTheme", { darkModeTheme });
  }, [darkModeTheme]);

  const changeTheme = () => {
    setDarkModeTheme(!darkModeTheme);
  };

  return (
    <button className="flex items-center" onClick={changeTheme}>
      <img
        className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300"
        src={!darkModeTheme ? lightPng : darkPng}
        alt={!darkModeTheme ? "light-mode" : "dark-mode"}
      />
    </button>
  );
}

export default DarkMode;
