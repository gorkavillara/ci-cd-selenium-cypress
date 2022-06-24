import "./App.css";
import Counter from "./components/Counter";

const App = () => (
  <div className="App">
    <h1>Mi aplicación</h1>
    <Counter start={0} />
  </div>
);

export default App;
