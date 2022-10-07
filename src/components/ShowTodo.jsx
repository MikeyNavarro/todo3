import React from "react";

const ShowTodo = (props) => {
  const deleteTodoHandler = (delIdx) => {
    const filteredTodos = props.allTodos.filter((todo, idx) => {
      return idx !== delIdx;
    });

    props.setAllTodos(filteredTodos);
  };

  return (
    <div>
      <div className="card  mt-5">
        <h2 className="card-header text-center">Your Todos!</h2>
        <div className="card-body">
          {props.allTodos.map((todo, idx) => {
            return (
              <div key={idx} className="card  mt-2 mb-3 bg-primary ">
                <h5 className="card-header"> Task Number: {idx + 1}</h5>
                <div className="card-body">
                  <p>{todo}</p>

                  <button
                    onClick={(e) => {
                      deleteTodoHandler(idx);
                    }}
                    className="btn"
                  >
                    Complete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowTodo;
