import React, { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  return (
    <>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
        <br />
        <br />
        <p>Message : {name}</p>
      </div>
    </>
  );
};

export default Form;
