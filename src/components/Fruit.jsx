import React from "react";

const Fruit = ({ name, price }) => {
  return (
    <div>
      <ul>
        {/* {name} {price} */}
        {price >= 200 ? (
          <li>
            {name} {price}
          </li>
        ) : (
          " "
        )}
      </ul>
    </div>
  );
};

export default Fruit;
