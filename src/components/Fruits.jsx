import React from "react";
import Fruit from "./Fruit";
const Fruits = () => {
  //   const fruits = ["Apple", "Banana", "Mango", "Orange", "Watermelon"];
  const fruits = [
    {
      name: "Apple",
      price: 200,
      soldOut: true,
    },
    {
      name: "Mango",
      price: 100,
      soldOut: true,
    },
    {
      name: "Banana",
      price: 150,
      soldOut: false,
    },
    {
      name: "Orange",
      price: 250,
      soldOut: true,
    },
    {
      name: "Watermelon",
      price: 500,
      soldOut: false,
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
          <Fruit
            key={index}
            name={fruit.name}
            price={fruit.price}
            soldOut={fruit.soldOut}
          /> // Rendering component inside  a loop
        ))}
      </ul>
    </>
  );
};

export default Fruits;
