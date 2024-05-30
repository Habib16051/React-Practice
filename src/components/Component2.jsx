import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Component2 = () => {
  const [user, text] = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{text.desc}</h2>
    </div>
  );
};

export default Component2;
