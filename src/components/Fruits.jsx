import React from "react";
import Fruit from "./Fruit";
const Fruits = () => {
  //   const fruits = ["Apple", "Banana", "Mango", "Orange", "Watermelon"];
  const fruits = [
    {
      name: "Apple",
      price: 200,
    },
    {
      name: "Mango",
      price: 100,
    },
    {
      name: "Grapes",
      price: 300,
    },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          //   <li key={index}>
          //     {" "}
          //     {fruit.name}, ${fruit.price}
          //   </li>
          <Fruit key={index} name={fruit.name} price={fruit.price} /> // Rendering component inside  a loop
        ))}
      </ul>
    </>
  );
};

export default Fruits;
