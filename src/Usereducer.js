import React from "react";
import { useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  if (action.type === "increment" && state < 20) {
    return state + 1;
  }
  if (action.type === "decrement" && state > 0) {
    return state - 1;
  }
  if (action.type === "reset") {
    return 0;
  }
  return state;
};

const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const handleInc = () => {
    dispatch({ type: "increment" });
  };
  const handleDec = () => {
    dispatch({ type: "decrement" });
  };
  const handleRes = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <h1>UseReducerCounterApp</h1>
      <h1>Counter : {state}</h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleRes}>Reset</button>
    </div>
  );
};
export default Usereducer;
