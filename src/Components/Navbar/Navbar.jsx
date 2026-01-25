"use client";
import React from "react";
import "./Navbar.css";
import Image from "next/image";
import logo from "@/Images/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Navbar = () => {
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <Image src={logo} alt="logo" />
        <button onClick={handlePop}>
          ENQUIRE NOW <FaArrowRightLong className="navbar-icon" />
        </button>
      </div>
      <div className="bottomBar-container">
        <b onClick={handlePop}>
          {" "}
          <span> Important!</span> January’26 Session Admissions Closing Soon
        </b>
      </div>
    </div>
  );
};

export default Navbar;
