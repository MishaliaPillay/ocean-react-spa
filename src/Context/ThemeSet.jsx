import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./Theme.css"; // Import the provided CSS file

const ThemeSet = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <article className="toggle-switch">
      <label>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={themeMode === "lightTheme"}
        />
        <span className="slider"></span>
      </label>
    </article>
  );
};

export default ThemeSet;
