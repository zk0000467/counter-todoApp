import Counter from "./Counter";
import Todo from "./Todo";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>Counter + Todo</h1>
      <Counter />
      <Todo />
    </div>
  );
}