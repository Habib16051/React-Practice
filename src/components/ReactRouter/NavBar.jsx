import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="*">Not Found</Link>
    </div>
  );
};

export default NavBar;
