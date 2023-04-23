import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className="flex justify-between sticky font-medium ">
      <span className="flex justify-center items-center font-montserrat text-xl">
        <img src={require("../assets/icon_podify.png")} alt=""className="object-scale-down h-12 ml-4"/>
      <Link to="/" className="ml-4">
        Home
      </Link>
      </span>
      <span className="p-4 font-montserrat text-xl">
      <Link to="/login" className="mx-6">
        Login
      </Link>
      <Link to="/signup" className="">
        Signup
      </Link>
      </span>
      
      </nav>
      <hr className="border-1 border-black-500"/>
    </div>
  );
};

export default Navbar;
