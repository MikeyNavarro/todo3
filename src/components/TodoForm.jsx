import React from "react";

const TodoForm = (props) => {
  const submitTodo = (e) => {
    e.preventDefault();
    props.setAllTodos([...props.allTodos, props.newTodo]);
    props.setNewTodo("");
  };

  const todoChangeHandler = (e) => {
    props.setNewTodo(e.target.value);
  };

  return (
    <div>
      <div className="card mt-5">
        <h1 className="card-header text-center">Enter A New Todo</h1>
        <div className="card-body">
          <form onSubmit={submitTodo}>
            <label className="form-label" htmlFor="todo">
              Your Todo:
            </label>
            <input
              onChange={todoChangeHandler}
              className="form-control"
              type="text"
              value={props.newTodo}
            />
            <div>
              <button className="mt-3 btn">Add Todo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
