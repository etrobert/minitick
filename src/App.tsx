import "./App.css";
import Grid from "./Grid";
import Header from "./Header";
import usePlayerIntent from "./usePlayerIntent";
import useTurns from "./useTurns";

function App() {
  useTurns();
  usePlayerIntent();

  return (
    <div className="App">
      <Header />
      <Grid />
    </div>
  );
}

export default App;
