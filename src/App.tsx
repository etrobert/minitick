import "./App.css";
import Grid from "./Grid";
import Header from "./Header";
import useAi from "./useAi";
import useKeyboard from "./useKeyboard";
import useTurns from "./useTurns";

function App() {
  useTurns();
  useKeyboard();
  useAi(1);

  return (
    <div className="App">
      <Header />
      <Grid />
    </div>
  );
}

export default App;
