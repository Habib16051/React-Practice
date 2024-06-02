import React, { useContext } from "react";
import { UserContext } from "./ContextApi/UserContext";

const UserProfile2 = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {/* <h1>{user.name}</h1> */}
      <br />
      <p>{user.age}</p>
    </>
  );
};

export default UserProfile2;
