import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";

function App() {
  return (
    <div className="App">
      <Grid playerPosition={{ x: 0, y: 2 }} />
    </div>
  );
}

export default App;
