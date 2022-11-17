import React from "react";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const handleInc = () => {
    if (value < 25) {
      setValue(value + 1);
    }
  };
  const handleDec = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const handleRes = () => {
    setValue(0);
  };
  return (
    <div>
      <h1>UseStateCounterApp</h1>
      <h1>Counter : {value} </h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleRes}>Reset</button>
    </div>
  );
};
export default Counter;
