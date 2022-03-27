import React, { useState, useReducer } from "react";

import styled from "styled-components";

const Button = styled.button`
  background-colour: teal;
  color: black;
  padding: 1rem 2rem;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-size: 2rem;
`;

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //you will want to use objects to set state because you will most likley be working with complex state

  return (
    <div>
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <Span>{state.count}</Span>
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
    </div>
  );
};

export default Counter;
