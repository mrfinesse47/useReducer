import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  //we can use an array here because we only have 1 thing in our state
  const [name, setName] = useState("");
  //this is just to control the form

  //console.log(todos); //checkout console

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    //it gets name due to a closure name is accessable above
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <a href="https://youtu.be/kK_Wqx3RnHk?t=750">You tube explanation</a>
    </>
  );
};

export default Todo;
