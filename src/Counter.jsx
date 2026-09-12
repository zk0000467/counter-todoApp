import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <h2>Counter</h2>
      <p className="counter-value">{count}</p>
      <div className="counter-controls">
        <button type="button" onClick={() => setCount((c) => c - 1)}>
          −
        </button>
        <button type="button" className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
      </div>
    </div>
  );
}