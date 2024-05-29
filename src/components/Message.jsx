import React, { useState } from "react";

const Message = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>Counter: {counter}</p>
      <br />

      <button
        className="bg-green-500 text-black"
        onClick={() => setCounter(counter + 1)}
      >
        Click here
      </button>
    </>
  );
};

export default Message;
