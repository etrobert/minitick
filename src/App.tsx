import "./App.css";
import Grid from "./Grid";
import usePlayerPosition from "./usePlayerPosition";

function App() {
  const playerPosition = usePlayerPosition();

  return (
    <div className="App">
      <Grid playerPosition={playerPosition} />
    </div>
  );
}

export default App;
