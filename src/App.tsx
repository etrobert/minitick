import "./App.css";
import Grid from "./Grid";
import Header from "./Header";
import useKeyboard from "./useKeyboard";
import useTurns from "./useTurns";

function App() {
  useTurns();
  useKeyboard();

  return (
    <div className="App">
      <Header />
      <Grid />
    </div>
  );
}

export default App;
