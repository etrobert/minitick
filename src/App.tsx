import "./App.css";
import Grid from "./Grid";
import Header from "./Header";
import useTurns from "./useTurns";

function App() {
  useTurns();

  return (
    <div className="App">
      <Header />
      <Grid />
    </div>
  );
}

export default App;
