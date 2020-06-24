import React, { useState } from "react";
import ThemeContext from "./context/context.js";
import Header from "./components/header";
import Hero from "./components/hero";

const App = () => {
  const theme = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Header />
        <Hero />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
