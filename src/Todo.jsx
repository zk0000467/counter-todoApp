import { useState } from "react";
import "./Todo.css";

export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn useState", done: true },
    { id: 2, text: "Handle click events", done: false },
  ]);

  function addTodo(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((t) => [...t, { id: Date.now(), text: trimmed, done: false }]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos((t) =>
      t.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  }

  function deleteTodo(id) {
    setTodos((t) => t.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo-card">
      <h2>Todo</h2>
      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="empty">No tasks yet.</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                className={"todo-text" + (todo.done ? " done" : "")}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                type="button"
                className="todo-delete"
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete"
              >
                ×
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}