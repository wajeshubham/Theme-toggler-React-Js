import React, { useContext } from "react";
import ThemeContext from "../context/context";
import appTheme from "../Colors";

const Hero = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = appTheme[theme];
  console.log(currentTheme);
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>Nice paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currentTheme.border}`,
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Hero;
