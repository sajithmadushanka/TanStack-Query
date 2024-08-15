import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex" , height:'50px', justifyContent:"space-around"}}>
      <Link to={"/"}>Home</Link>
      <Link to={"/simple"}>Simple Hero</Link>
      <Link to={"/rq"}>RQ hero</Link>
    </nav>
  );
};

export default Navbar;
