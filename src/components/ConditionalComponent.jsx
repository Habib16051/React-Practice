import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

const ConditionalComponent = () => {
  const display = true;

  return display ? <Welcome /> : <Code />; //Ternary Condition

  //   if (display) {
  //     return <Welcome />;
  //   } else {
  //     return <Code />;
  //   }

  //   if (display) {
  //     return <h1>This is a conditional Component</h1>;
  //   } else {
  //     return <h2>Lets deep dive into react world</h2>;
  //   }
};

export default ConditionalComponent;
