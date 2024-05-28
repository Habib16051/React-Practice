import React from "react";

const Fruit = ({ name, price }) => {
  return (
    <div>
      <ul>
        <li>
          {name} {price}
        </li>
      </ul>
    </div>
  );
};

export default Fruit;
