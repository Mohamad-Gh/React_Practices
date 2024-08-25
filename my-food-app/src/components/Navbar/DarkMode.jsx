import React, { useEffect, useState } from "react";
import lightPng from "../../assets/website/light-mode-button.png";
import darkPng from "../../assets/website/dark-mode-button.png";

function DarkMode() {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const [darkModeTheme, setDarkModeTheme] = useState(
    prefersDarkScheme.matches ? "dark" : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (darkModeTheme === "dark") {
      element.classList.add("dark");
      // localStorage.setItem("darkModeTheme", "dark");
    } else {
      element.classList.remove("dark");
      // localStorage.setItem("darkModeTheme", "light");
    }
  }, [darkModeTheme]);

  const changeTheme = () => {
    darkModeTheme === "light"
      ? setDarkModeTheme("dark")
      : darkModeTheme === "dark"
      ? setDarkModeTheme("light")
      : null;
  };
  return (
    <button className="flex items-center" onClick={changeTheme}>
      <img
        className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300"
        src={darkModeTheme === "light" ? lightPng : darkPng}
        alt={darkModeTheme === "light" ? "light-mode" : "dark-mode"}
      />
    </button>
  );
}

export default DarkMode;
