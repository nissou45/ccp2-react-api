import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/register">Register</Link> {" | "}
      <Link to="/login">Login</Link> {" | "}
      <Link to="/profile">Profile</Link> {" | "}
      <Link to="/commandes">Commandes</Link>
    </nav>
  );
};

export default Navbar;
