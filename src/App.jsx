import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";

const person = {
  name: "Habib",
  age: 28,
  message: "Welcome to Bangladesh",
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

function App() {
  return (
    <>
      <Navbar person={person} />
      <br />
      <Fruits />
      <br />
      <ConditionalComponent />
      <br />
      <Message />
    </>
  );
}

export default App;
