import "./App.css";
//context added
import context from "./components/Context";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ParentOne from "./components/ParentOne";
import ParentTwo from "./components/ParentTwo";

function App() {
  // dark theme false here
  const [theme, setTheme] = useState(false);
  console.log(`theme: ${theme ? "dark" : "light"}`);
  return (
    <context.Provider value={theme}>
      <button onClick={() => setTheme(!theme)}>Change theme</button>
      <Navbar />
      <ParentOne />
      <ParentTwo />
    </context.Provider>
  );
}

export default App;
