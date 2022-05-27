import "./App.css";
import Grid from "./Grid";
import Header from "./Header";
import usePlayerPosition from "./usePlayerPosition";

function App() {
  usePlayerPosition();

  return (
    <div className="App">
      <Header />
      <Grid />
    </div>
  );
}

export default App;
