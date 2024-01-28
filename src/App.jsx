import React, { useState } from "react";
import { Header } from "./components/Header.jsx";
import "./App.css";
import { AddTodo } from "./components/AddTodo.jsx";
import { TodoItem } from "./components/TodoItem.jsx"

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header />
      <div>
        <AddTodo setTodos={setTodos} />
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
