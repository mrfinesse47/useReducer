import React, { useReducer } from "react";

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
  margin: 1rem;
`;

const ACTIONS = { INCREMENT: "increment", DECREMENT: "decrement" };
//better to use constants if you are using strings over and over
//this helps with autocomplete to prevent mis spelling

//this is  the first basic example
//you dont need 2 functions for increment and decrement
//just 1 reducer

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
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
      <Button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</Button>
      <Span>{state.count}</Span>
      <Button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</Button>
    </div>
  );
};

export default Counter;
