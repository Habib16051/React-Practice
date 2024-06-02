// src/components/UserProfile.js
import React, { useContext } from "react";
import { UserContext } from "./ContextApi/UserContext";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  //   const updateName = (user,name) => {
  //     // setUser({ ...user, name });
  //   };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      {/* <button onClick={updateName}>Change Name to Jane Doe</button> */}
    </div>
  );
};

export default UserProfile;
