import logo from "../components/logo.png";
import React from "react";
import HamburgerDrawer from "./HamburgerDrawer";
import "./Navbar.css";
const Navbar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};

export default Navbar;
