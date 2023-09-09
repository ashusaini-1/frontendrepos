import React from "react";

const Navbar = (props) => {
  return (
    <div className="bg-blue-500 h-15 w-full flex items-center justify-center">
      <h1 style={{ fontSize: "3rem" }} className="text-white  font-bold">
        {props.name}
      </h1>
    </div>
  );
};

export default Navbar;
