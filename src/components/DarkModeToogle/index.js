import React from "react";
import { ReactComponent as Sun } from "../../assets/Sun.svg";
import { ReactComponent as Moon } from "../../assets/Moon.svg";
import "./style.scss";

export const DarkModeToogle = () => {
  const setDarkMode = () => {
    const body = document.querySelector("body");
    body.setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    const body = document.querySelector("body");
    body.setAttribute("data-theme", "light");
  };
  setLightMode();
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={(e) => {
          if (e.target.checked) {
            setDarkMode();
          } else {
            setLightMode();
          }
        }}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};
