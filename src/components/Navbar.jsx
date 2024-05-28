import React from "react";
const Navbar = ({ person }) => {
  //   const { message, name, age } = props; // destructuring props
  return (
    <>
      <h1>
        {person.message} {person.name} {person.age} {person.numbers}
      </h1>
    </>
  );
};

export default Navbar;
