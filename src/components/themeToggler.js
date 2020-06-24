import React, { useContext } from "react";
import ThemeContext from "../context/context";

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <button>{themeMode === "light" ? "dark mode" : "light mode"}</button>
    </div>
  );
};

export default ThemeToggle;
