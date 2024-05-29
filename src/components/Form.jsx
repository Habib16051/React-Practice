import React, { useState } from "react";
const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    e.preventDefault();
    alert(`The name you entered was: ${name.firstName} ${name.lastName}`);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="display flex-auto gap-4">
        <input
          className="p-2"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />

        <input
          className="ml-5 p-2"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <br />
        <br />
        <p>Message : {name.firstName} </p>
        <p>{name.lastName}</p>
        <br />
        <button
          onClick={handleSubmit}
          className="bg-green-500 rounded-md text-lg text-black"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
