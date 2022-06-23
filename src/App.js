import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Mi aplicación</h1>
      <Counter start={0} />
    </div>
  );
}

export default App;
