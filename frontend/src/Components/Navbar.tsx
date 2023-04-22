import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <Link to="/" className="p-2">
        Home
      </Link>
      <Link to="/login" className="p-2">
        Login
      </Link>
      <Link to="/signup" className="p-2">
        Signup
      </Link>
    </div>
  );
};

export default Navbar;
