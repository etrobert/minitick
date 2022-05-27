import "./App.css";
import Grid from "./Grid";
import Header from "./Header";
import usePlayerPosition from "./usePlayerPosition";

function App() {
  const playerPosition = usePlayerPosition();

  return (
    <div className="App">
      <Header />
      <Grid playerPosition={playerPosition} />
    </div>
  );
}

export default App;
