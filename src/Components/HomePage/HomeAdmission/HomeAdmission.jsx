import React from "react";
import { FaBookOpen, FaClipboardCheck, FaClock, FaRupeeSign, FaWpforms } from "react-icons/fa";
import "./HomeAdmission.css"
const HomeAdmission = () => {
  const steps = [
    {
      icon: <FaBookOpen />,
      title: "01. Select Your Program",
      desc: "Choose the program that suits your goals",
      color: "green",
    },
    {
      icon: <FaWpforms />,
      title: "02. Complete Your Application",
      desc: "Fill out your application with all the necessary information",
      color: "blue",
    },
    {
      icon: <FaRupeeSign />,
      title: "03. Pay Your Program Fee",
      desc: "Make your program payment securely & easily",
      color: "yellow",
    },
    {
      icon: <FaClipboardCheck />,
      title: "04. Submit & Register",
      desc: "Submit your application and complete your registration",
      color: "pink",
    },
    {
      icon: <FaClock />,
      title: "05. Await Enrollment Details",
      desc: "Wait for enrollment details & further guidance",
      color: "green",
    },
  ];
  return (
    <div className="homeAdmission-container">
      <div className="homeAdmission-heading">
        <h2>Admission Process</h2>
      </div>
      <div className="homeAdmission-wrapper">
        <div className="homeAdmission-line"></div>
        {steps.map((step, index) => (
          <div className="homeAdmission-step" key={index}>
            <div className={`homeAdmission-icon ${step.color}`}>
              {step.icon}
            </div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
        {" "}
      </div>
    </div>
  );
};

export default HomeAdmission;
