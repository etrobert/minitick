import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";
import useKeyboardEvents from "./useKeyboardEvents";

function App() {
  useKeyboardEvents();

  return (
    <div className="App">
      <Grid playerPosition={{ x: 0, y: 2 }} />
    </div>
  );
}

export default App;
