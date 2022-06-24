import "./App.css";
import Counter from "./components/Counter";
import Title from "./components/Title";

const App = () => (
  <div className="App">
    <Title />
    <Counter start={0} />
  </div>
);

export default App;
