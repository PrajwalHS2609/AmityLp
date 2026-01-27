"use client";

import React from "react";
import "./Loader.css";
import Image from "next/image";
import logo from "./../../Images/"
const Loader = () => {
  return (
    <div className="loader-wrapper">
      <Image src={clean.src} alt="clean loader" />
    </div>
  );
};

export default Loader;

