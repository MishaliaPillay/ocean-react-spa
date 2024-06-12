import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./Theme.css"; // Import the provided CSS file

const ThemeSet = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <article className="toggle-switch">
      <label className="toggle-switch-label"> {/* Added class name */}
        <input 
          type="checkbox"
          onChange={toggleTheme}
          checked={themeMode === "lightTheme"}
          className="toggle-switch-input"
        />
        <span className="slider"></span>
      </label>
    </article>
  );
};

export default ThemeSet;
