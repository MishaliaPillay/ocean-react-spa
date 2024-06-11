// Context/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("themeMode") || "lightTheme";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
    document.documentElement.className = themeMode;
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === "lightTheme" ? "darkTheme" : "lightTheme"));
  };

  const value = { themeMode, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
