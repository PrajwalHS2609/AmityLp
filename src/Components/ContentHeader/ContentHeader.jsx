import React from "react";
import "./ContentHeader.css";

export default function ContentHeader({ img, heading }) {
  return (
    <section
      className="contentHeader"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.55),
          rgba(0, 0, 0, 0.55)
        ), url("${img}")`,
      }}
    >
      <div className="contentHeader-container">
        <h1 className="contentHeader-title">{heading}</h1>
      </div>
    </section>
  );
}