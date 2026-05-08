import Counter from "./Counter";
import Unicafe from "./Unicafe";
import Anecdotes from "./Anecdotes";
import Todo from "./Todo";
import "./styles.css";

const App = () => {
  return (
    <div>
      <div className="section">
        <Counter />
      </div>

      <div className="section">
        <Unicafe />
      </div>

      <div className="section">
        <Anecdotes />
      </div>

      <div className="section">
        <Todo />
      </div>
    </div>
  );
};

export default App;
