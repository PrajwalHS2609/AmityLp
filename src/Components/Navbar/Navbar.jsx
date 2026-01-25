import React from "react";
import "./Navbar.css";
import Image from "next/image";
import logo from "@/Images/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <Image src={logo} alt="logo" />
        <button>ENQUIRE NOW <FaArrowRightLong className="navbar-icon" />
</button>
      </div>
      <div className="bottomBar-container"></div>
    </div>
  );
};

export default Navbar;
