import React from "react";

const Fruit = ({ name, price, soldOut }) => {
  return (
    <div>
      <ul>
        <li>
          {name} {price} {soldOut ? "soldout" : " "}
        </li>
      </ul>
    </div>
  );
};

export default Fruit;
