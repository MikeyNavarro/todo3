import React, { useState } from "react";
import ShowTodo from "./components/ShowTodo";
import TodoForm from "./components/TodoForm";
import "./Journal.css";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <TodoForm
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            allTodos={allTodos}
            setAllTodos={setAllTodos}
          />
        </div>
        <ShowTodo allTodos={allTodos} setAllTodos={setAllTodos} />
      </div>
    </div>
  );
};

export default App;
