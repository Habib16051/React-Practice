import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Error 404!</p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        placeat commodi minima aspernatur aut ex similique hic voluptate quam,
        enim, ut laudantium harum earum culpa id corrupti. Est itaque amet nemo
        necessitatibus delectus soluta natus id! Placeat sunt officia laborum
        alias sed enim fugiat, quod maxime quae tempora nulla error?
      </p>
      <br />
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default NotFound;
