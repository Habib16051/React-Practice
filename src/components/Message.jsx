import React, { useState } from "react";

const Message = () => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(1); // Using multiple state for increment and setIncrement
  const [decrement, setDecrement] = useState(1);
  return (
    <>
      <button
        className="bg-green-500 text-black"
        onClick={() => setCounter(counter - decrement)}
      >
        Click here (-)
      </button>
      <br />
      <p>Counter: {counter}</p>
      <br />

      <button
        className="bg-green-500 text-black"
        onClick={() => setCounter(counter + increment)}
      >
        Click here (+)
      </button>
    </>
  );
};

export default Message;
