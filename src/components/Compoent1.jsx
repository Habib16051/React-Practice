import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import Component2 from "./Component2";

const Compoent1 = () => {
  const [user, setUser] = useState({ name: "Md Habibur Rahman" });
  const [text, setName] = useState({ desc: "Hello, world!" });
  return (
    <div>
      <UserContext.Provider value={(user, text)}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default Compoent1;
