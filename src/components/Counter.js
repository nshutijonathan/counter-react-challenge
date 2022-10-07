import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = (e) => {
    e.preventDefault();
    return e.target.value === "+"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };
  return (
    <div>
      <button value="+" onClick={handleCounter}>
        +
      </button>
      {counter}
      <button value="-" onClick={handleCounter}>
        -
      </button>
    </div>
  );
};

export default Counter;
